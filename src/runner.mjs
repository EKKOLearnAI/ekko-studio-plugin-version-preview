import { randomUUID, createHash } from "node:crypto";
import { spawn, execFile } from "node:child_process";
import { promisify } from "node:util";
import { createServer } from "node:net";
import {
  mkdir,
  readFile,
  writeFile,
  rename,
  rm,
  open,
  lstat,
  realpath,
} from "node:fs/promises";
import { existsSync, openSync, closeSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { x as extractTar } from "tar";
import { readFileSync } from "node:fs";
import { assertContracts, validateModel } from "../sdk/harness/contracts.mjs";
const contract = assertContracts(
  JSON.parse(
    readFileSync(new URL("../contracts/plugin.json", import.meta.url), "utf8"),
  ),
);
import { fileURLToPath } from "node:url";
import {
  Processes,
  alive,
  fingerprint,
  cwdOf,
  stopTree,
  toolchain,
  cleanEnvironment,
} from "./processes.mjs";
const exec = promisify(execFile);
const readJson = async (file, fallback) => {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (e) {
    if (e.code === "ENOENT") return fallback;
    throw e;
  }
};
export function assertRef(ref) {
  if (
    typeof ref !== "string" ||
    !/^[A-Za-z0-9][A-Za-z0-9._/-]{0,199}$/.test(ref) ||
    ref.includes("..") ||
    ref.includes("//")
  )
    throw new Error("Invalid preview ref");
  return ref;
}
export function repository(raw) {
  const value = raw
    .trim()
    .replace(/^git\+/, "")
    .replace(/^git@github.com:/, "https://github.com/")
    .replace(/\.git$/, "")
    .replace(/\/$/, "");
  if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(value))
    throw new Error("Preview repository must be a GitHub owner/repository URL");
  return value;
}
export function sortedTags(tags, limit = 8) {
  return [
    { name: "main", sha: "" },
    ...tags
      .filter((t) =>
        /^v\d+\.\d+\.\d+(?:-(?:alpha|beta|rc)(?:[.-]\d+)?)?$/.test(t.name),
      )
      .sort((a, b) => {
        const [ac, ap = ""] = a.name.split("-"),
          [bc, bp = ""] = b.name.split("-");
        return (
          bc.localeCompare(ac, undefined, { numeric: true }) ||
          (!ap && bp
            ? -1
            : ap && !bp
              ? 1
              : bp.localeCompare(ap, undefined, { numeric: true }))
        );
      })
      .slice(0, limit),
  ];
}
export async function portFree(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.once("error", () => resolve(false));
    server.listen(port, "127.0.0.1", () => server.close(() => resolve(true)));
  });
}
export async function logTail(file) {
  let fd;
  try {
    fd = await open(file, "r");
    const s = await fd.stat();
    const n = Math.min(s.size, 24000);
    const buf = Buffer.alloc(n);
    await fd.read(buf, 0, n, Math.max(0, s.size - n));
    return buf.toString("utf8");
  } catch (e) {
    if (e.code === "ENOENT") return "";
    throw e;
  } finally {
    await fd?.close();
  }
}
export class PreviewRunner {
  constructor({
    dataDir,
    environment,
    config = {},
    signal,
    fetchImpl = fetch,
    processes,
    rootDir, sourceDir, homeDir, portSlot = 0,
  }) {
    this.storageMode = "isolated";
    this.environment = environment || { isPreview: false };
    this.config = config;
    this.lifetime = signal;
    this.fetch = fetchImpl;
    this.dataDir = resolve(dataDir);
    this.root = resolve(rootDir || join(this.dataDir, "preview"));
    this.source = sourceDir || join(this.root, "source");
    this.home = homeDir || join(this.root, "home");
    this.portSlot = portSlot;
    this.autoPorts = new Set();
    const defaults = { frontendPort: 8661 + portSlot * 10, backendPort: 8660 + portSlot * 10,
      bridgePort: 18660 + portSlot * 10, workerPortBase: 20000 + portSlot * 1000 };
    for (const [key, fallback] of Object.entries(defaults)) {
      if (!config[key]) this.autoPorts.add(key);
      this[key] = config[key] || fallback;
      if (!Number.isInteger(this[key]) || this[key] < 1024 || this[key] > (key === "workerPortBase" ? 64500 : 65535))
        throw new Error("Invalid preview port");
    }
    if (new Set(Object.keys(defaults).map(key => this[key])).size !== 4)
      throw new Error("Preview ports must be distinct");
    if (config.frontendOrigin) {
      const url = new URL(config.frontendOrigin);
      if (!["http:", "https:"].includes(url.protocol) || url.username || url.password)
        throw new Error("Invalid frontendOrigin");
    }
    this.repo = repository(config.repository || environment?.studio?.repositoryUrl || "https://github.com/EKKOLearnAI/ekko-studio");
    this.updateBridge();
    this.actionLog = join(this.dataDir, "preview-action.log");
    this.devLog = join(this.dataDir, "preview-dev.log");
    this.stateFile = join(this.dataDir, "runner.json");
    this.lock = join(this.root, ".version-preview-owner.json");
    this.state = {
      version: 1,
      last: null,
      active: null,
      process: null,
      backups: [],
    };
    this.processes = processes || new Processes((text) => this.log(text));
    this.fetches = new Set();
    this.tagPackages = new Map();
    this.closed = false;
  }
  updateBridge() {
    const transport = this.config.bridgeTransport;
    this.bridge = transport === "ipc" ? `ipc://${join(this.home, "agent-bridge.sock")}` : `tcp://127.0.0.1:${this.bridgePort}`;
    if (transport === "ipc" && Buffer.byteLength(join(this.home, "agent-bridge.sock")) > 100)
      throw new Error("Preview IPC path is too long; use automatic bridge transport");
  }
  async allocatePorts() {
    const keys = ["frontendPort", "backendPort", "bridgePort", "workerPortBase"];
    const saved = this.state.ports;
    const ownProcess = this.state.process;
    if (saved && ownProcess?.fingerprint && await fingerprint(ownProcess.pid) === ownProcess.fingerprint) {
      for (const key of keys) this[key] = saved[key];
      this.updateBridge();
      return;
    }
    for (let attempt = -1; attempt < 60; attempt++) {
      const base = 8660 + this.portSlot * 10 + Math.max(0, attempt) * 200;
      const ports = { frontendPort: base + 1, backendPort: base, bridgePort: base + 10000,
        workerPortBase: 20000 + this.portSlot * 1000 };
      for (const key of keys) {
        if (!this.autoPorts.has(key)) ports[key] = this[key];
        else if (attempt === -1) ports[key] = saved?.[key] || this[key];
      }
      if (new Set(Object.values(ports)).size !== 4) continue;
      const available = await Promise.all([...this.autoPorts].map(key => portFree(ports[key])));
      if (!available.every(Boolean)) continue;
      for (const key of keys) this[key] = ports[key];
      this.state.ports = ports;
      this.updateBridge();
      return;
    }
    throw new Error("No available preview ports were found");
  }
  async safePaths() {
    for (const file of [this.source, this.home, this.dataDir]) {
      if (existsSync(file) && (await lstat(file)).isSymbolicLink())
        throw new Error(`Refusing symlink data path: ${file}`);
    }
    const canonicalRoot = await realpath(this.root);
    for (const file of [this.source, this.home])
      if (existsSync(file) && dirname(await realpath(file)) !== canonicalRoot)
        throw new Error("Preview path escapes Web UI home");
  }
  async init() {
    await mkdir(this.root, { recursive: true });
    const physicalRoot = await realpath(this.root);
    if (physicalRoot !== this.root) {
      const oldHome = this.home;
      this.root = physicalRoot;
      this.source = join(this.root, basename(this.source));
      this.home = join(this.root, basename(this.home));
      this.lock = join(this.root, ".version-preview-owner.json");
      if (this.bridge === `ipc://${oldHome}/agent-bridge.sock`)
        this.bridge = `ipc://${this.home}/agent-bridge.sock`;
    }
    await this.safePaths();
    await mkdir(this.dataDir, { recursive: true });
    this.owner = {
      pid: process.pid,
      fingerprint: await fingerprint(process.pid),
      token: randomUUID(),
    };
    const claim = async () => {
      const fd = await open(this.lock, "wx", 0o600);
      try {
        validateModel(contract, "owner", this.owner);
        await fd.writeFile(JSON.stringify(this.owner));
      } finally {
        await fd.close();
      }
    };
    try {
      await claim();
    } catch (e) {
      if (e.code !== "EEXIST") throw e;
      const owner = await readJson(this.lock, null);
      if (owner) validateModel(contract, "owner", owner);
      const current = owner && await fingerprint(owner.pid);
      if (!owner || (alive(owner.pid) && (!current || !owner.fingerprint || current === owner.fingerprint)))
        throw new Error(
          "This preview owner is still active; use the same Studio instance or stop it before reloading",
        );
      await rm(this.lock);
      await claim();
    }
    try {
      const stored = await readJson(this.stateFile, null);
      if (stored) validateModel(contract, "state", stored);
      this.state = {
        version: 1,
        active: null,
        last: null,
        process: null,
        backups: [],
        ...stored,
      };
      if (this.state.version !== 1)
        throw new Error(
          "Unknown preview state version; preserving existing data",
        );
      if (this.state.active) {
        this.state.last = {
          ...this.state.active,
          success: false,
          message: "Interrupted by host exit",
          code: "interrupted",
          completedAt: new Date().toISOString(),
        };
        this.state.active = null;
      }
      await this.allocatePorts();
      // Existing plugin-owned source/data is reused in place.
      await this.persist();
      return this;
    } catch (e) {
      await this.release();
      throw e;
    }
  }
  async release() {
    const owner = await readJson(this.lock, null);
    if (owner?.token === this.owner.token) await rm(this.lock);
  }
  async log(text) {
    try {
      await mkdir(this.dataDir, { recursive: true });
      const fd = await open(this.actionLog, "a", 0o600);
      try {
        await fd.writeFile(
          `[${new Date().toISOString()}] ${String(text).slice(-12000)}\n`,
        );
      } finally {
        await fd.close();
      }
    } catch {}
  }
  async persist() {
    const value = Object.fromEntries(
      Object.entries(this.state).filter(([, v]) => v !== null),
    );
    validateModel(contract, "state", value);
    const tmp = this.stateFile + "." + randomUUID();
    await writeFile(tmp, JSON.stringify(value, null, 2) + "\n", {
      mode: 0o600,
    });
    await rename(tmp, this.stateFile);
  }
  async status() {
    const pkg = await readJson(join(this.source, "package.json"), null).catch(
      () => null,
    );
    const currentTag = await readFile(
      join(this.source, ".preview-tag"),
      "utf8",
    ).catch(() => "");
    const record = this.state.process;
    const running = Boolean(
      record &&
        record.fingerprint &&
        (await fingerprint(record.pid)) === record.fingerprint,
    );
    return {
      storage_mode: this.storageMode,
      preview_dir: this.source,
      webui_home: this.home,
      exists: existsSync(this.source),
      has_package: ["ekko-studio", "hermes-web-ui"].includes(pkg?.name),
      installed: this.missing().length === 0,
      running,
      pid: running ? record.pid : 0,
      current_tag: currentTag.trim(),
      frontend_url:
        this.config.frontendOrigin || `http://localhost:${this.frontendPort}`,
      frontend_port: this.frontendPort,
      agent_bridge_endpoint: this.bridge,
      log_path: this.devLog,
      dev_log_path: this.devLog,
      action_log_path: this.actionLog,
      dev_log: await logTail(this.devLog),
      action_log: await logTail(this.actionLog),
      active_action: this.state.active?.name || "",
      active_action_started_at: this.state.active?.startedAt || "",
      last_action: this.state.last?.name || "",
      last_action_completed_at: this.state.last?.completedAt || "",
      last_action_success: Boolean(this.state.last?.success),
      last_action_message: this.state.last?.message || "",
      last_action_code: this.state.last?.code || "",
      backups: [...this.state.backups],
      recursive_blocked: this.environment.isPreview,
      source_commit: await readFile(
        join(this.source, ".preview-commit"),
        "utf8",
      ).catch(() => ""),
    };
  }
  missing() {
    const bins = ["vite", "ts-node", "tsc"].filter(
      (n) =>
        !existsSync(
          join(
            this.source,
            "node_modules/.bin",
            n + (process.platform === "win32" ? ".cmd" : ""),
          ),
        ),
    );
    if (!existsSync(join(this.source, "node_modules/node-pty")))
      bins.push("node-pty");
    return bins;
  }
  async assertPackage(dir = this.source) {
    const pkg = await readJson(join(dir, "package.json"), null);
    if (!["ekko-studio", "hermes-web-ui"].includes(pkg?.name))
      throw new Error("Source is not a Studio package");
    return pkg;
  }
  assertActive() {
    if (this.closed || this.stopping)
      throw new Error("Plugin is closing or stopping");
    this.lifetime?.throwIfAborted();
    if (this.environment.isPreview)
      throw new Error("Recursive version preview is disabled");
  }
  async portsFree() {
    await this.allocatePorts();
    await this.persist();
    const ports = [
      this.backendPort,
      this.frontendPort,
      ...(this.bridge.startsWith("tcp:") ? [this.bridgePort] : []),
    ];
    const free = await Promise.all(ports.map(portFree));
    const busy = ports.filter((p, i) => !free[i]);
    if (busy.length)
      throw new Error(
        `Preview ports in use: ${busy.join(", ")}; stop the process using the configured ports or use automatic ports`,
      );
  }
  async request(url, signal, timeout = 15000) {
    const res = await this.fetch(url, {
      signal: AbortSignal.any([
        ...(signal ? [signal] : []),
        ...(this.lifetime ? [this.lifetime] : []),
        AbortSignal.timeout(timeout),
      ]),
      headers: { "User-Agent": "ekko-studio-version-preview" },
    });
    if (!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
    return res;
  }
  async tags() {
    this.assertActive();
    if (this.tagsJob) return this.tagsJob;
    this.tagsJob = this.loadTags();
    try { return await this.tagsJob; }
    finally { this.tagsJob = null; }
  }
  async studioTag(tag, signal) {
    if (!/^[0-9a-f]{40,64}$/i.test(tag.sha))
      throw new Error("Invalid tag commit returned by GitHub");
    let pkg = this.tagPackages.get(tag.sha);
    if (!pkg) {
      let content;
      try {
        content = await this.processes.run("git", ["show", `${tag.sha}:package.json`], {
          cwd: this.tagCatalog, signal, timeout: 15000, quiet: true,
          env: { ...cleanEnvironment(), GIT_TERMINAL_PROMPT: "0" },
        });
      } catch (error) {
        signal.throwIfAborted();
        // An API-only installation can still inspect public tags without Git.
        const url = this.repo.replace("github.com", "raw.githubusercontent.com") + `/${tag.sha}/package.json`;
        const response = await this.request(url, signal);
        content = await response.text();
      }
      pkg = JSON.parse(content);
      validateModel(contract, "tagPackage", pkg);
      this.tagPackages.set(tag.sha, pkg);
    }
    return ["ekko-studio", "hermes-web-ui"].includes(pkg.name) &&
      tag.name.slice(1) === pkg.version;
  }
  async publicTagPackage(tag, signal) {
    const url = this.repo.replace("github.com", "raw.githubusercontent.com") + `/${tag.sha}/package.json`;
    const env = cleanEnvironment();
    let content;
    if (env.HTTPS_PROXY || env.https_proxy || env.ALL_PROXY || env.all_proxy) {
      // Node fetch does not inherit the macOS system proxy. Curl is optional;
      // Git remains the fallback when unavailable or when credentials are needed.
      content = await this.processes.run("curl", ["--fail", "--silent", "--show-error", "--location", "--max-time", "8", url], {
        signal, env, timeout: 10000, quiet: true,
      });
    } else content = await (await this.request(url, signal, 8000)).text();
    const pkg = JSON.parse(content);
    validateModel(contract, "tagPackage", pkg);
    this.tagPackages.set(tag.sha, pkg);
  }
  async loadTagPackages(tags, signal) {
    for (const tag of tags)
      if (!/^[0-9a-f]{40,64}$/i.test(tag.sha)) throw new Error("Invalid tag commit returned by GitHub");
    const uncached = tags.filter(tag => !this.tagPackages.has(tag.sha));
    await Promise.allSettled(uncached.map(tag => this.publicTagPackage(tag, signal)));
    signal.throwIfAborted();
    const needed = tags.filter(tag => !this.tagPackages.has(tag.sha));
    if (!needed.length) return;
    const env = { ...cleanEnvironment(), GIT_TERMINAL_PROMPT: "0" };
    const run = (args) => this.processes.run("git", args, {
      cwd: this.tagCatalog, signal, env, timeout: 30000, quiet: true,
    });
    try {
      if (!existsSync(join(this.tagCatalog, "HEAD"))) {
        await mkdir(this.tagCatalog, { recursive: true });
        await run(["init", "--bare"]);
        await run(["config", "remote.origin.url", this.repo + ".git"]);
        await run(["config", "remote.origin.promisor", "true"]);
        await run(["config", "remote.origin.partialclonefilter", "blob:none"]);
      }
      await run(["fetch", "--quiet", "--depth=1", "--filter=blob:none", "--no-tags", "origin",
        ...needed.map(tag => tag.sha)]);
    } catch (error) {
      signal.throwIfAborted();
      // studioTag falls back to GitHub metadata; never include an unverified tag.
    }
  }
  async loadTags() {
    this.assertActive();
    if (this.tagsCache?.until > Date.now())
      return { tags: this.tagsCache.tags };
    const controller = new AbortController();
    this.fetches.add(controller);
    const signal = AbortSignal.any([
      controller.signal,
      ...(this.lifetime ? [this.lifetime] : []),
    ]);
    let tags;
    try {
      try {
        const output = await this.processes.run(
          "git",
          ["ls-remote", "--tags", "--refs", this.repo + ".git"],
          {
            signal,
            timeout: 8000,
            env: { ...cleanEnvironment(), GIT_TERMINAL_PROMPT: "0" },
          },
        );
        tags = output
          .split(/\r?\n/)
          .filter(Boolean)
          .map((line) => {
            const [sha, ref] = line.split(/\s+/);
            return { name: ref.replace("refs/tags/", ""), sha };
          });
      } catch (e) {
        signal.throwIfAborted();
        tags = (
          await (
            await this.request(
              this.repo.replace("github.com", "api.github.com/repos") +
                "/tags?per_page=100",
              signal,
            )
          ).json()
        ).map((t) => ({ name: t.name, sha: t.commit?.sha || "" }));
      }
      this.tagCatalog = join(this.dataDir, "tag-catalog", createHash("sha256").update(this.repo).digest("hex").slice(0, 16));
      const candidates = sortedTags(tags, Infinity).slice(1);
      const verified = [];
      for (let offset = 0; offset < candidates.length && verified.length < 8; offset += 4) {
        const batch = candidates.slice(offset, offset + 4);
        await this.loadTagPackages(batch, signal);
        const matches = await Promise.all(batch.map(tag => this.studioTag(tag, signal)));
        verified.push(...batch.filter((tag, index) => matches[index]));
      }
      const selected = [{ name: "main", sha: "" }, ...verified.slice(0, 8)];
      this.tagsCache = { until: Date.now() + 300000, tags: selected };
      return { tags: selected };
    } finally {
      this.fetches.delete(controller);
    }
  }
  async accept(name, input = {}) {
    this.assertActive();
    if (this.state.active)
      throw new Error(
        `Preview action already running: ${this.state.active.name}`,
      );
    if (["prepare", "start"].includes(name) && input.tag !== undefined)
      assertRef(input.tag);
    if (name === "prepare" && !input.tag)
      throw new Error("Preview ref required");
    if (!["prepare", "install", "start"].includes(name))
      throw new Error("Unknown preview action");
    const controller = new AbortController();
    this.jobController = controller;
    const signal = AbortSignal.any([
      controller.signal,
      ...(this.lifetime ? [this.lifetime] : []),
    ]);
    this.state.active = {
      id: randomUUID(),
      name,
      startedAt: new Date().toISOString(),
    };
    const saved = this.persist();
    this.job = (async () => {
      let result = { success: true, message: "Completed", code: "" };
      try {
        await saved;
        signal.throwIfAborted();
        await this[name](input, signal);
        signal.throwIfAborted();
      } catch (e) {
        result = {
          success: false,
          message: e.message || String(e),
          code: signal.aborted ? "cancelled" : "preview_failed",
        };
        if (name === "start")
          await this.stopRuntime().catch((err) => {
            result.message += "; cleanup: " + err.message;
          });
      } finally {
        this.state.last = {
          ...this.state.active,
          ...result,
          completedAt: new Date().toISOString(),
        };
        this.state.active = null;
        await this.log(`${name}: ${result.message}`);
        await this.persist();
      }
    })();
    void this.job.catch((e) =>
      this.log(`Persisting job result failed: ${e.message}`),
    );
    await saved;
    return { ...(await this.status()), success: true, accepted: true };
  }
  async download(ref, stage, signal) {
    const res = await this.request(
      `${this.repo.replace("https://github.com/", "https://api.github.com/repos/")}/tarball/${encodeURIComponent(ref)}`,
      signal,
      60000,
    );
    let bytes = 0;
    const archive = join(stage, ".source.tar.gz");
    const fd = await open(archive, "wx", 0o600);
    try {
      await pipeline(
        Readable.fromWeb(res.body),
        async function* (source) {
          for await (const chunk of source) {
            signal.throwIfAborted();
            bytes += chunk.length;
            if (bytes > 256 * 1024 * 1024)
              throw new Error("Source archive exceeds 256 MiB");
            yield chunk;
          }
        },
        fd.createWriteStream(),
        { signal },
      );
    } finally {
      await fd.close();
    }
    const extracted = join(stage, "extracted");
    await mkdir(extracted);
    // Reject links, special files, absolute paths and traversal before writing entries.
    let expanded = 0;
    await extractTar({
      file: archive,
      cwd: extracted,
      strip: 1,
      strict: true,
      preservePaths: false,
      filter: (entry, stat) => {
        signal.throwIfAborted();
        if (
          entry.startsWith("/") ||
          entry.split(/[\\/]/).includes("..") ||
          !["File", "Directory"].includes(stat.type)
        )
          throw new Error("Unsafe source archive entry");
        expanded += stat.size || 0;
        if (expanded > 1024 * 1024 * 1024)
          throw new Error("Expanded archive exceeds 1 GiB");
        return true;
      },
    });
    signal.throwIfAborted();
    await rm(archive);
    return extracted;
  }
  async prepare({ tag }, signal) {
    await this.stopRuntime();
    await this.portsFree();
    await this.safePaths();
    const stage = join(this.root, `.version-preview-stage-${randomUUID()}`);
    await mkdir(stage);
    let code = join(stage, "source");
    let commit = "";
    try {
      try {
        await this.processes.run(
          "git",
          [
            "clone",
            "--depth",
            "1",
            "--branch",
            assertRef(tag),
            "--",
            this.repo + ".git",
            code,
          ],
          { signal, env: { ...cleanEnvironment(), GIT_TERMINAL_PROMPT: "0" } },
        );
        commit = await this.processes.run("git", ["rev-parse", "HEAD"], {
          cwd: code,
          signal,
        });
      } catch (e) {
        signal.throwIfAborted();
        await this.log(`Git failed; using archive: ${e.message}`);
        await rm(code, { recursive: true, force: true });
        code = await this.download(tag, stage, signal);
      }
      await this.assertPackage(code);
      await writeFile(join(code, ".preview-tag"), tag + "\n");
      await writeFile(join(code, ".preview-commit"), commit + "\n");
      signal.throwIfAborted();
      let backup;
      if (existsSync(this.source)) {
        backup = join(
          this.root,
          `${basename(this.source)}.backup-${randomUUID()}`,
        );
        await rename(this.source, backup);
      }
      try {
        await rename(code, this.source);
      } catch (e) {
        if (backup) await rename(backup, this.source);
        throw e;
      }
      if (backup) this.state.backups.push(backup);
      await this.persist();
    } finally {
      await rm(stage, { recursive: true, force: true });
    }
  }
  async nodePty(tools, signal) {
    await this.processes.run(tools.command, ["-e", "require('node-pty')"], {
      cwd: this.source,
      env: tools.env,
      signal,
      timeout: 30000,
    });
  }
  async install(_input, signal) {
    await this.stopRuntime();
    await this.portsFree();
    await this.safePaths();
    await this.assertPackage();
    const tools = await toolchain(this.config);
    const env = {
      ...tools.env,
      NODE_ENV: "development",
      npm_config_production: "false",
      npm_config_omit: "",
      NPM_CONFIG_PRODUCTION: "false",
      NPM_CONFIG_OMIT: "",
    };
    await this.processes.run(
      tools.command,
      [
        ...tools.args,
        "install",
        "--include=dev",
        "--ignore-scripts",
        "--no-audit",
        "--no-fund",
      ],
      { cwd: this.source, env, signal, timeout: 900000 },
    );
    await this.processes.run(
      tools.command,
      [...tools.args, "rebuild", "node-pty"],
      { cwd: this.source, env, signal, timeout: 300000 },
    );
    if (this.missing().length)
      throw new Error("Missing dependencies: " + this.missing().join(", "));
    await this.nodePty(tools, signal);
  }
  async start({ tag }, signal) {
    const current = (await this.status()).current_tag;
    if (tag && tag !== current) await this.prepare({ tag }, signal);
    await this.safePaths();
    await this.assertPackage();
    if ((await this.status()).running) return;
    const tools = await toolchain(this.config);
    if (this.missing().length)
      throw new Error(
        "Install dependencies first: " + this.missing().join(", "),
      );
    await this.nodePty(tools, signal);
    await this.portsFree();
    await mkdir(this.home, { recursive: true });
    signal.throwIfAborted();
    const env = {
      ...tools.env,
      NODE_ENV: "development",
      PORT: String(this.backendPort),
      HERMES_WEB_UI_HOME: this.home,
      HERMES_WEBUI_STATE_DIR: this.home,
      HERMES_HOME: join(this.home, "hermes-agent"),
      UPLOAD_DIR: join(this.home, "uploads"),
      HERMES_AGENT_BRIDGE_ENDPOINT: this.bridge,
      HERMES_AGENT_BRIDGE_WORKER_PORT_BASE: String(this.workerPortBase),
      HERMES_WEB_UI_BACKEND_PORT: String(this.backendPort),
      HERMES_WEB_UI_FRONTEND_PORT: String(this.frontendPort),
      VITE_HERMES_PREVIEW: "1",
      AUTH_TOKEN: "",
      HERMES_WEB_UI_STOP_GATEWAYS_ON_SHUTDOWN: "0",
    };
    const logFd = openSync(this.devLog, "a", 0o600);
    let child;
    try {
      child = spawn(
        tools.command,
        [
          fileURLToPath(new URL("./preview-child.mjs", import.meta.url)),
          this.source,
          String(this.backendPort),
          String(this.frontendPort),
        ],
        {
          cwd: this.source,
          env,
          detached: true,
          windowsHide: true,
          stdio: ["ignore", logFd, logFd],
        },
      );
    } finally {
      closeSync(logFd);
    }
    this.child = child;
    await new Promise((resolve, reject) => {
      child.once("spawn", resolve);
      child.once("error", reject);
    });
    const record = {
      pid: child.pid,
      fingerprint: await fingerprint(child.pid),
      sourceDir: this.source,
    };
    if (!record.fingerprint) {
      await stopTree({ pid: child.pid }, true);
      this.child = null;
      throw new Error("Cannot record preview process identity");
    }
    this.state.process = record;
    await this.persist();
    child.unref();
    try {
      const deadline = Date.now() + 60000;
      while (Date.now() < deadline) {
        signal.throwIfAborted();
        if (!alive(child.pid) || child.exitCode !== null)
          throw new Error(
            "Preview exited before becoming ready; inspect dev log",
          );
        const checks = await Promise.all(
          [this.frontendPort, this.backendPort].map(async (port) => {
            try {
              const res = await this.fetch(`http://127.0.0.1:${port}/`, {
                signal: AbortSignal.any([signal, AbortSignal.timeout(1500)]),
              });
              await res.body?.cancel();
              return res.status < 500;
            } catch {
              return false;
            }
          }),
        );
        if (checks.every(Boolean)) return;
        await delay(500, undefined, { signal });
      }
      throw new Error("Preview frontend/backend readiness timed out");
    } catch (e) {
      await this.stopRuntime();
      throw e;
    }
  }
  async stopRuntime() {
    if (this.state.process) {
      await stopTree(
        this.state.process,
        Boolean(
          this.child?.pid === this.state.process.pid &&
            this.child.exitCode === null &&
            this.child.signalCode === null,
        ),
      );
      this.state.process = null;
      this.child = null;
      await this.persist();
    }
  }
  async stop() {
    if (this.stopPromise) return this.stopPromise;
    this.stopping = true;
    this.stopPromise = (async () => {
      try {
        this.jobController?.abort(new Error("Cancelled by user"));
        for (const c of this.fetches) c.abort(new Error("Cancelled by user"));
        await this.job;
        await this.stopRuntime();
        await this.processes.close();
        return { ...(await this.status()), success: true };
      } finally {
        this.stopping = false;
        this.stopPromise = null;
      }
    })();
    return this.stopPromise;
  }
  async close() {
    if (this.closing) return this.closing;
    this.closed = true;
    this.closing = (async () => {
      await this.stop();
      await this.processes.close();
      await this.release();
    })();
    return this.closing;
  }
}
