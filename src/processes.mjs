import { spawn, execFile, execFileSync } from "node:child_process";
import { existsSync, realpathSync } from "node:fs";
import { dirname, join, delimiter, isAbsolute } from "node:path";
import { promisify } from "node:util";
import { setTimeout as delay } from "node:timers/promises";
const exec = promisify(execFile);
const win = process.platform === "win32";
export const alive = (pid) => {
  let exists = true;
  try {
    process.kill(pid, 0);
  } catch (e) {
    if (e.code !== "EPERM") exists = false;
  }
  if (!exists || win) return exists;
  try {
    const state = execFileSync("ps", ["-o", "stat=", "-p", String(pid)], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 3000,
    }).trim();
    return Boolean(state) && !state.startsWith("Z");
  } catch {
    return false;
  }
};
export async function fingerprint(pid) {
  try {
    if (win)
      return (
        await exec(
          "powershell.exe",
          [
            "-NoProfile",
            "-Command",
            `(Get-CimInstance Win32_Process -Filter "ProcessId = ${Number(pid)}").CreationDate.ToString('o')`,
          ],
          { timeout: 3000 },
        )
      ).stdout.trim();
    return (
      await exec("ps", ["-o", "lstart=", "-p", String(pid)], { timeout: 3000 })
    ).stdout.trim();
  } catch {
    return "";
  }
}
export async function cwdOf(pid) {
  if (win) return "";
  try {
    return (
      (
        await exec("lsof", ["-a", "-p", String(pid), "-d", "cwd", "-Fn"], {
          timeout: 3000,
        })
      ).stdout
        .split("\n")
        .find((x) => x.startsWith("n"))
        ?.slice(1) || ""
    );
  } catch {
    return "";
  }
}
export async function stopTree(record, tracked = false) {
  if (!record?.pid) return;
  const pid = record.pid;
  // Revalidate persisted identity immediately before signalling. A reused PID is never ours.
  if (
    !tracked &&
    (!record.fingerprint || (await fingerprint(pid)) !== record.fingerprint)
  ) {
    if (alive(pid))
      throw new Error(`Process ${pid} identity changed; refusing to stop it`);
    // Root exited after launching descendants. Only signal a surviving exclusive group
    // when every member's cwd is still inside the recorded source tree.
    if (!win && record.sourceDir) {
      const { stdout } = await exec("ps", ["-axo", "pid=,pgid="], {
        timeout: 3000,
      });
      const members = stdout
        .trim()
        .split("\n")
        .map((x) => x.trim().split(/\s+/).map(Number))
        .filter((x) => x[1] === pid)
        .map((x) => x[0]);
      if (!members.length) return;
      for (const child of members) {
        const cwd = await cwdOf(child);
        if (cwd !== record.sourceDir && !cwd.startsWith(record.sourceDir + "/"))
          throw new Error(
            "Orphan process group ownership could not be verified",
          );
      }
    } else return;
  }
  if (win) {
    await exec("taskkill.exe", ["/PID", String(pid), "/T", "/F"], {
      timeout: 5000,
    }).catch((e) => {
      if (alive(pid)) throw e;
    });
    return;
  }
  // Snapshot live ancestry before parents exit. Include descendant-owned groups
  // created with detached:true, but never signal a group containing outsiders.
  const { stdout } = await exec("ps", ["-axo", "pid=,ppid=,pgid="], {
    timeout: 3000,
  });
  const rows = stdout
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split(/\s+/).map(Number));
  const descendants = new Set([pid]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const [child, parent] of rows)
      if (descendants.has(parent) && !descendants.has(child)) {
        descendants.add(child);
        changed = true;
      }
  }
  const groups = new Set([pid]);
  for (const [child, , group] of rows) {
    if (
      descendants.has(child) &&
      descendants.has(group) &&
      rows
        .filter((row) => row[2] === group)
        .every((row) => descendants.has(row[0]))
    )
      groups.add(group);
  }
  const signal = (kind) => {
    for (const group of groups) {
      try {
        process.kill(-group, kind);
      } catch (e) {
        if (!["ESRCH", "EPERM"].includes(e.code)) throw e;
      }
    }
  };
  signal("SIGTERM");
  await delay(500);
  signal("SIGKILL");
  for (let i = 0; i < 20; i++) {
    // A zombie cannot run or hold a listener; macOS may report EPERM for its
    // former group until launchd reaps it. Verify live members with ps instead.
    const snapshot = (
      await exec("ps", ["-axo", "pgid=,stat="], { timeout: 3000 })
    ).stdout;
    const liveGroups = snapshot
      .trim()
      .split("\n")
      .map((line) => line.trim().split(/\s+/))
      .filter(([, state]) => state && !state.startsWith("Z"))
      .map(([group]) => Number(group));
    if (![...groups].some((group) => liveGroups.includes(group))) return;
    await delay(50);
  }
  throw new Error(
    `Owned process group(s) ${[...groups].join(", ")} did not exit after SIGKILL`,
  );
}

export function parseSystemProxy(output) {
  const field = (name) => output.match(new RegExp(`^\\s*${name}\\s*:\\s*(.+?)\\s*$`, "m"))?.[1];
  const proxies = {};
  for (const [prefix, key] of [["HTTP", "http_proxy"], ["HTTPS", "https_proxy"]]) {
    const host = field(`${prefix}Proxy`), port = Number(field(`${prefix}Port`));
    if (field(`${prefix}Enable`) !== "1" || !host ||
        !/^[a-zA-Z0-9.:[\]-]+$/.test(host) || !Number.isInteger(port) || port < 1 || port > 65535) continue;
    const address = host.includes(":") && !host.startsWith("[") ? `[${host}]` : host;
    proxies[key] = `http://${address}:${port}`;
  }
  if (Object.keys(proxies).length) proxies.no_proxy = "localhost,127.0.0.1,::1";
  return proxies;
}
let systemProxies, systemProxiesUntil = 0;
function systemProxyEnvironment() {
  if (process.platform !== "darwin") return {};
  if (systemProxiesUntil > Date.now()) return systemProxies;
  try {
    systemProxies = parseSystemProxy(execFileSync("/usr/sbin/scutil", ["--proxy"], {
      encoding: "utf8", timeout: 2000, stdio: ["ignore", "pipe", "ignore"],
    }));
  } catch { systemProxies = {}; }
  systemProxiesUntil = Date.now() + 60000;
  return systemProxies;
}
export function cleanEnvironment(source = process.env, proxies = systemProxyEnvironment()) {
  const allowed =
    /^(?:PATH|HOME|USERPROFILE|USERNAME|USER|LOGNAME|TMP|TEMP|TMPDIR|SystemRoot|WINDIR|COMSPEC|PATHEXT|APPDATA|LOCALAPPDATA|LANG|LC_.*|TERM|SHELL|PREFIX|HTTP_PROXY|HTTPS_PROXY|ALL_PROXY|NO_PROXY|http_proxy|https_proxy|all_proxy|no_proxy|npm_config_registry|npm_config_proxy|npm_config_https_proxy|NODE_EXTRA_CA_CERTS|SSL_CERT_FILE|SSL_CERT_DIR)$/i;
  const env = Object.fromEntries(
    Object.entries(source).filter(
      ([k, v]) => allowed.test(k) && v !== undefined,
    ),
  );
  // GUI-launched macOS apps often have no proxy environment despite an active
  // system proxy. Git and npm need it explicitly; user overrides take priority.
  if (!env.ALL_PROXY && !env.all_proxy) {
    for (const [key, value] of Object.entries(proxies))
      if (!env[key] && !env[key.toUpperCase()]) env[key] = value;
  }
  return env;
}
async function commandPath(name) {
  try {
    return (
      await exec(win ? "where.exe" : "which", [name], { timeout: 3000 })
    ).stdout
      .trim()
      .split(/\r?\n/)[0];
  } catch {
    return "";
  }
}
export async function toolchain(config = {}) {
  const node =
    config.nodePath ||
    (process.versions.electron
      ? await commandPath(win ? "node.exe" : "node")
      : process.execPath);
  if (!node || !isAbsolute(node) || !existsSync(node))
    throw new Error("Node runtime unavailable; configure nodePath");
  const npmBin = await commandPath(win ? "npm.cmd" : "npm");
  const prefix = dirname(dirname(node));
  const candidates = [
    config.npmCliPath,
    join(dirname(node), "node_modules/npm/bin/npm-cli.js"),
    join(prefix, "lib/node_modules/npm/bin/npm-cli.js"),
  ];
  if (npmBin) {
    const real = realpathSync(npmBin);
    if (real.endsWith("npm-cli.js")) candidates.push(real);
    candidates.push(join(dirname(npmBin), "node_modules/npm/bin/npm-cli.js"));
  }
  const cli = candidates.find((p) => p && existsSync(p));
  if (!cli) throw new Error("npm-cli.js unavailable; configure npmCliPath");
  return {
    command: node,
    args: [cli],
    env: {
      ...cleanEnvironment(),
      PATH: [dirname(node), process.env.PATH].filter(Boolean).join(delimiter),
      ELECTRON_RUN_AS_NODE: "1",
    },
  };
}
export class Processes {
  children = new Set();
  constructor(log = () => {}) {
    this.log = log;
  }
  async run(
    command,
    args,
    { cwd, env = cleanEnvironment(), signal, timeout = 300_000, quiet = false } = {},
  ) {
    signal?.throwIfAborted();
    if (!quiet) this.log(`${command} ${args.join(" ")}`);
    const child = spawn(command, args, {
      cwd,
      env,
      detached: true,
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"],
    });
    this.children.add(child);
    let output = "",
      stderr = "",
      stop,
      timedOut = false;
    const closed = new Promise((resolve, reject) => {
      child.on("error", reject);
      child.on("close", (code, sig) =>
        code === 0
          ? resolve(output)
          : reject(new Error(stderr || `Command exited: ${code ?? sig}`)),
      );
    });
    // Attach immediately so cancellation cannot create an unhandled rejection.
    void closed.catch(() => {});
    const abort = () => {
      stop ||= stopTree({ pid: child.pid }, true).catch((e) => {
        this.log(e.message);
        child.kill("SIGKILL");
      });
    };
    signal?.addEventListener("abort", abort, { once: true });
    if (signal?.aborted) abort();
    const timer = setTimeout(() => {
      timedOut = true;
      abort();
    }, timeout);
    child.stdout.on("data", (x) => {
      output = (output + x).slice(-1024 * 1024);
      if (!quiet) this.log(String(x));
    });
    child.stderr.on("data", (x) => {
      stderr = (stderr + x).slice(-1024 * 1024);
      if (!quiet) this.log(String(x));
    });
    try {
      const result = await closed;
      signal?.throwIfAborted();
      if (timedOut) throw new Error("Command timed out");
      return result.trim();
    } catch (e) {
      signal?.throwIfAborted();
      if (timedOut) throw new Error("Command timed out");
      throw e;
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      await stop;
      this.children.delete(child);
    }
  }
  async close() {
    await Promise.all(
      [...this.children].map((child) => stopTree({ pid: child.pid }, true)),
    );
    this.children.clear();
  }
}
