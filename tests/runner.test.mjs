import { test } from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  rm,
  symlink,
  open,
} from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { createServer } from "node:net";
import { createServer as httpServer } from "node:http";
import { setTimeout as delay } from "node:timers/promises";
import { c as createTar } from "tar";
import {
  PreviewRunner,
  assertRef,
  sortedTags,
  repository,
  logTail,
} from "../src/runner.mjs";
import { Processes, alive, stopTree } from "../src/processes.mjs";
import {
  rewriteDirectWebsocketPorts,
  previewConfig,
} from "../src/runtime-config.mjs";
import ts from "typescript";
import { fileURLToPath } from "node:url";
const rootParent = process.env.PREVIEW_TEST_DIR || tmpdir();
async function freePort() {
  const s = createServer();
  await new Promise((r) => s.listen(0, "127.0.0.1", r));
  const p = s.address().port;
  await new Promise((r) => s.close(r));
  return p;
}
async function fixture(t, options = {}) {
  const root = await mkdtemp(join(rootParent, "version-preview-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const ports = await Promise.all([1, 2, 3, 4].map(freePort));
  const r = new PreviewRunner({
    dataDir: join(root, "plugins/plugin-data/version-preview"),
    environment: {
      webUiHome: root,
      studio: { repositoryUrl: "https://github.com/example/studio" },
      isPreview: false,
    },
    config: {
      frontendPort: ports[0],
      backendPort: ports[1],
      bridgePort: ports[2],
      workerPortBase: ports[3],
    },
    ...options,
  });
  await r.init();
  t.after(() => r.close());
  return r;
}
async function source(dir, { runnable = false } = {}) {
  await mkdir(dir, { recursive: true });
  await writeFile(
    join(dir, "package.json"),
    JSON.stringify({
      name: "ekko-studio",
      version: "0.0.0",
      scripts: { dev: "node dev.mjs", "dev:client": "vite" },
    }),
  );
  await writeFile(join(dir, ".preview-tag"), "main\n");
  await writeFile(join(dir, "user-change.txt"), "keep this change");
  if (runnable) {
    for (const bin of ["vite", "ts-node", "tsc"]) {
      await mkdir(join(dir, "node_modules/.bin"), { recursive: true });
      await writeFile(join(dir, "node_modules/.bin", bin), "fixture");
    }
    await mkdir(join(dir, "node_modules/node-pty"), { recursive: true });
    await writeFile(
      join(dir, "node_modules/node-pty/index.js"),
      "module.exports = {}",
    );
    await writeFile(
      join(dir, "dev.mjs"),
      `import http from 'node:http';import fs from 'node:fs';import {spawn} from 'node:child_process';const child=spawn(process.execPath,['-e',"process.on('SIGTERM',()=>{});setInterval(()=>{},1000)"],{stdio:'ignore',detached:true});fs.writeFileSync(process.env.HERMES_WEB_UI_HOME+'/probe.json',JSON.stringify({child:child.pid,home:process.env.HERMES_WEB_UI_HOME,upload:process.env.UPLOAD_DIR,auth:process.env.AUTH_TOKEN,poison:process.env.NODE_OPTIONS||'',port:process.env.PORT}));for(const p of [process.env.PORT,process.env.HERMES_WEB_UI_FRONTEND_PORT])http.createServer((q,s)=>s.end('ok')).listen(Number(p),'127.0.0.1');`,
    );
  }
}
const originalSource = source;
async function independentSource(dir, options = {}) {
  await originalSource(dir, options);
  if (!options.runnable) return;
  for (const name of ["vite", "typescript", "ts-node", "@types"]) {
    const target = fileURLToPath(
      new URL("../node_modules/" + name, import.meta.url),
    );
    await symlink(target, join(dir, "node_modules", name), "dir");
  }
  await mkdir(join(dir, "packages/server/src"), { recursive: true });
  await mkdir(join(dir, "packages/client"), { recursive: true });
  await writeFile(
    join(dir, "vite.config.ts"),
    "export default {root:'packages/client',server:{proxy:{'/api':{target:'http://127.0.0.1:8648'}}}}",
  );
  await writeFile(
    join(dir, "packages/client/index.html"),
    "<html><body>Independent preview fixture</body></html>",
  );
  await writeFile(
    join(dir, "packages/server/tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        target: "ES2022",
        module: "Node16",
        moduleResolution: "Node16",
        skipLibCheck: true,
        types: ["node"],
      },
    }),
  );
  await writeFile(
    join(dir, "packages/server/src/index.ts"),
    `const http=require('node:http');const fs=require('node:fs');const child=require('node:child_process').spawn(process.execPath,['-e',"process.on('SIGTERM',()=>{});setInterval(()=>{},1000)"],{stdio:'ignore',detached:true});fs.writeFileSync(process.env.HERMES_WEB_UI_HOME+'/probe.json',JSON.stringify({child:child.pid,home:process.env.HERMES_WEB_UI_HOME,upload:process.env.UPLOAD_DIR,auth:process.env.AUTH_TOKEN,poison:process.env.NODE_OPTIONS||'',port:process.env.PORT}));http.createServer((q:any,s:any)=>s.end('ok')).listen(Number(process.env.PORT),'127.0.0.1');`,
  );
}
async function done(r) {
  await r.job;
  const s = await r.status();
  assert.equal(s.active_action, "");
  return s;
}
test("refs, versions and GitHub sources reject bad input and preserve order", () => {
  for (const value of ["../secret", "--help", "x..y", "x;rm", "/main", "a//b"])
    assert.throws(() => assertRef(value));
  assert.equal(assertRef("feature/a-1"), "feature/a-1");
  assert.equal(
    repository("git@github.com:owner/repo.git"),
    "https://github.com/owner/repo",
  );
  assert.throws(() => repository("https://evil.test/a/b"));
  assert.deepEqual(
    sortedTags([
      { name: "v1.9.0", sha: "a" },
      { name: "v1.10.0-beta.1", sha: "b" },
      { name: "v1.10.0", sha: "c" },
      { name: "noise", sha: "d" },
    ]).map((x) => x.name),
    ["main", "v1.10.0", "v1.10.0-beta.1", "v1.9.0"],
  );
});
test("reuses legacy source/data without modifying either; lock excludes a second owner", async (t) => {
  const r = await fixture(t);
  await source(r.source);
  await mkdir(r.home);
  await writeFile(join(r.home, "database.db"), "existing-data");
  assert.equal((await r.status()).current_tag, "main");
  const other = new PreviewRunner({
    dataDir: r.dataDir,
    environment: r.environment,
    config: r.config,
  });
  await assert.rejects(other.init(), /owner/);
  await r.close();
  assert.equal(
    await readFile(join(r.home, "database.db"), "utf8"),
    "existing-data",
  );
  assert.equal(
    await readFile(join(r.source, "user-change.txt"), "utf8"),
    "keep this change",
  );
});
test("cancel during git clone drains task, rejects concurrent work and retains old source/data", async (t) => {
  let started;
  const ready = new Promise((r) => (started = r));
  const processes = {
    run: async (_c, _a, { signal }) => {
      started();
      await delay(60000, undefined, { signal });
    },
    close: async () => {},
  };
  const r = await fixture(t, { processes });
  await source(r.source);
  await mkdir(r.home);
  await writeFile(join(r.home, "db"), "untouched");
  await r.accept("prepare", { tag: "main" });
  await ready;
  await assert.rejects(r.accept("install"), /already running/);
  const stopped = await r.stop();
  assert.equal(stopped.last_action_code, "cancelled");
  assert.equal(stopped.active_action, "");
  assert.equal(
    await readFile(join(r.source, "user-change.txt"), "utf8"),
    "keep this change",
  );
  assert.equal(await readFile(join(r.home, "db"), "utf8"), "untouched");
});
test("archive fallback validates before switch and preserves full old source backup", async (t) => {
  const r = await fixture(t, {
    processes: {
      run: async () => {
        throw new Error("git offline");
      },
      close: async () => {},
    },
  });
  await source(r.source);
  const tarRoot = join(r.root, "tar-input");
  await source(join(tarRoot, "archive-root"));
  const tarPath = join(r.root, "source.tar.gz");
  await createTar({ cwd: tarRoot, gzip: true, file: tarPath }, [
    "archive-root",
  ]);
  const bytes = await readFile(tarPath);
  r.fetch = async () => new Response(bytes);
  await r.accept("prepare", { tag: "v0.8.25" });
  const s = await done(r);
  assert.equal(
    s.last_action_success,
    true,
    s.last_action_message + "\n" + s.dev_log,
  );
  assert.equal(s.current_tag, "v0.8.25");
  assert.equal(s.backups.length, 1);
  assert.equal(
    await readFile(join(s.backups[0], "user-change.txt"), "utf8"),
    "keep this change",
  );
  const pkg = JSON.parse(
    await readFile(join(r.source, "package.json"), "utf8"),
  );
  assert.equal(pkg.scripts["dev:client"], "vite");
});
test("invalid downloaded package fails without replacing existing files", async (t) => {
  const r = await fixture(t, {
    processes: {
      run: async () => {
        throw new Error("git offline");
      },
      close: async () => {},
    },
    fetchImpl: async () => new Response("not gzip"),
  });
  await source(r.source);
  await r.accept("prepare", { tag: "main" });
  const s = await done(r);
  assert.equal(s.last_action_success, false);
  assert.equal(s.backups.length, 0);
  assert.equal(
    await readFile(join(r.source, "user-change.txt"), "utf8"),
    "keep this change",
  );
});
test("independent Vite adaptation parses direct WS calls without modifying source config", async (t) => {
  const r = await fixture(t);
  await independentSource(r.source, { runnable: true });
  const input =
    '<script setup lang="ts">const target = formatHostForPort(location.hostname, 8648);const other = 8648</script><template>8648</template>';
  const output = rewriteDirectWebsocketPorts(
    input,
    "Terminal.vue",
    r.backendPort,
    ts,
  );
  assert.ok(output.includes("location.hostname, " + r.backendPort));
  assert.ok(output.includes("const other = 8648"));
  assert.ok(output.endsWith("<template>8648</template>"));
  const before = await readFile(join(r.source, "vite.config.ts"), "utf8");
  const config = await previewConfig(
    {
      sourceDir: r.source,
      backendPort: r.backendPort,
      frontendPort: r.frontendPort,
    },
    {
      loadConfigFromFile: async () => ({
        config: {
          server: { proxy: { "/api": { target: "http://127.0.0.1:8648" } } },
        },
      }),
    },
  );
  assert.equal(
    config.server.proxy["/api"].target,
    "http://127.0.0.1:" + r.backendPort,
  );
  assert.equal(config.server.strictPort, true);
  assert.equal(
    await readFile(join(r.source, "vite.config.ts"), "utf8"),
    before,
  );
});
test("real npm fixture starts two endpoints, isolates env, and stop kills resistant grandchild", async (t) => {
  const r = await fixture(t);
  await independentSource(r.source, { runnable: true });
  const before = {
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    UPLOAD_DIR: process.env.UPLOAD_DIR,
  };
  process.env.AUTH_TOKEN = "production-secret";
  process.env.UPLOAD_DIR = "/must-not-use";
  t.after(() => {
    for (const [k, v] of Object.entries(before))
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
  });
  await r.accept("start", {});
  const s = await done(r);
  assert.equal(
    s.last_action_success,
    true,
    s.last_action_message + "\n" + s.dev_log,
  );
  assert.equal(s.running, true);
  const probe = JSON.parse(await readFile(join(r.home, "probe.json"), "utf8"));
  assert.equal(probe.upload, join(r.home, "uploads"));
  assert.equal(probe.auth, "");
  assert.equal(probe.home, r.home);
  assert.equal(probe.port, String(r.backendPort));
  assert.equal(alive(probe.child), true);
  await r.stop();
  assert.equal((await r.status()).running, false);
  assert.equal(alive(probe.child), false);
});
test("unrelated process occupying a port is rejected and survives stop", async (t) => {
  const r = await fixture(t);
  const server = httpServer((q, s) => s.end("unrelated"));
  await new Promise((res) => server.listen(r.frontendPort, "127.0.0.1", res));
  t.after(() => new Promise((res) => server.close(res)));
  await assert.rejects(r.portsFree(), /in use/);
  await r.stop();
  assert.equal((await fetch(`http://127.0.0.1:${r.frontendPort}`)).status, 200);
});
test("persisted PID reuse never signals unrelated process", async () => {
  await assert.rejects(
    stopTree({
      pid: process.pid,
      fingerprint: "not-this-process",
      sourceDir: "/wrong",
    }),
    /identity changed/,
  );
  assert.equal(alive(process.pid), true);
});
test("restart marks interrupted jobs and preserves source/home", async (t) => {
  const r = await fixture(t);
  await r.close();
  await writeFile(
    r.stateFile,
    JSON.stringify({
      version: 1,
      active: { id: "prior", name: "install", startedAt: "2026-01-01" },
      backups: [],
    }),
  );
  const recovered = new PreviewRunner({
    dataDir: r.dataDir,
    environment: r.environment,
    config: r.config,
  });
  await recovered.init();
  t.after(() => recovered.close());
  assert.equal((await recovered.status()).last_action_code, "interrupted");
});
test("recursive preview and symlink paths are refused", async (t) => {
  const r = await fixture(t);
  r.environment.isPreview = true;
  await assert.rejects(r.accept("start", {}), /Recursive/);
  r.environment.isPreview = false;
  await mkdir(join(r.root, "actual"));
  await symlink(join(r.root, "actual"), r.home);
  await assert.rejects(r.safePaths(), /symlink/);
});
test("bounded tail and process cancellation finish without orphan", async (t) => {
  const r = await fixture(t);
  const file = join(r.root, "large.log");
  await writeFile(file, "x".repeat(100000) + "END");
  assert.equal((await logTail(file)).length, 24000);
  assert.ok((await logTail(file)).endsWith("END"));
  const p = new Processes();
  const ctl = new AbortController();
  const running = p.run(process.execPath, ["-e", "setInterval(()=>{},1000)"], {
    signal: ctl.signal,
  });
  setTimeout(() => ctl.abort(new Error("test cancel")), 100);
  await assert.rejects(running, /test cancel/);
  assert.equal(p.children.size, 0);
});
test("legacy adoption verifies cwd/group, stops old npm preview and preserves its data", async (t) => {
  const { spawn } = await import("node:child_process");
  const { toolchain } = await import("../src/processes.mjs");
  const r = await fixture(t);
  await independentSource(r.source, { runnable: true });
  await mkdir(r.home);
  await writeFile(join(r.home, "legacy.db"), "do not migrate");
  const tools = await toolchain();
  const child = spawn(tools.command, [...tools.args, "run", "dev"], {
    cwd: r.source,
    env: {
      ...tools.env,
      PORT: String(r.backendPort),
      HERMES_WEB_UI_FRONTEND_PORT: String(r.frontendPort),
      HERMES_WEB_UI_HOME: r.home,
    },
    detached: true,
    stdio: "ignore",
  });
  t.after(async () => {
    try {
      process.kill(-child.pid, "SIGKILL");
    } catch {}
  });
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${r.frontendPort}`)).ok) break;
    } catch {}
    await delay(50);
  }
  await r.accept("adopt", { confirm: true });
  const s = await done(r);
  assert.equal(
    s.last_action_success,
    true,
    s.last_action_message + "\n" + s.dev_log,
  );
  assert.equal(alive(child.pid), false);
  assert.equal(
    await readFile(join(r.home, "legacy.db"), "utf8"),
    "do not migrate",
  );
});
test("reloading plugin stops owned preview and permits a fresh owner", async (t) => {
  const r = await fixture(t);
  await independentSource(r.source, { runnable: true });
  await r.accept("start", {});
  const s = await done(r);
  assert.equal(s.running, true, s.last_action_message + "\n" + s.dev_log);
  await r.close();
  assert.equal(alive(s.pid), false);
  const next = new PreviewRunner({
    dataDir: r.dataDir,
    environment: r.environment,
    config: r.config,
  });
  await next.init();
  t.after(() => next.close());
  assert.equal((await next.status()).current_tag, "main");
  assert.equal((await next.status()).running, false);
});
test("cancelling the accept/persist race prevents any later work", async (t) => {
  const r = await fixture(t);
  let calls = 0;
  r.install = async () => {
    calls++;
  };
  const accepting = r.accept("install");
  await r.stop();
  await accepting;
  assert.equal(calls, 0);
  assert.equal((await r.status()).last_action_code, "cancelled");
});
test("cancel aborts dependency installation and does not schedule a rebuild", async (t) => {
  let mark;
  const started = new Promise((r) => (mark = r));
  const calls = [];
  const processes = {
    run: async (command, args, { signal }) => {
      calls.push(args);
      mark();
      await delay(60000, undefined, { signal });
    },
    close: async () => {},
  };
  const r = await fixture(t, { processes });
  await source(r.source);
  await r.accept("install");
  await started;
  await r.stop();
  const state = await r.status();
  assert.equal(state.last_action_code, "cancelled");
  assert.equal(calls.length, 1);
  assert.ok(calls[0].includes("install"));
  assert.ok(!calls.some((args) => args.includes("rebuild")));
});
test("cancel aborts a streaming archive and retains old data", async (t) => {
  let mark,
    cancelled = false;
  const reading = new Promise((r) => (mark = r));
  const r = await fixture(t, {
    processes: {
      run: async () => {
        throw new Error("git offline");
      },
      close: async () => {},
    },
    fetchImpl: async () =>
      new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(new Uint8Array([1, 2, 3]));
            mark();
          },
          cancel() {
            cancelled = true;
          },
        }),
      ),
  });
  await source(r.source);
  await r.accept("prepare", { tag: "main" });
  await reading;
  await r.stop();
  assert.equal((await r.status()).last_action_code, "cancelled");
  assert.equal(cancelled, true);
  assert.equal(
    await readFile(join(r.source, "user-change.txt"), "utf8"),
    "keep this change",
  );
});
