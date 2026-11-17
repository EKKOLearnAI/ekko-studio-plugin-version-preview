import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { assertContracts, validateModel } from "../sdk/harness/contracts.mjs";
const contract = assertContracts(JSON.parse(readFileSync(new URL("../contracts/plugin.json", import.meta.url), "utf8")));

export function hostInstanceKey() {
  // Stable across plugin reloads and Node upgrades; separates desktop and local
  // development servers even when both use the same public plugin data root.
  return createHash("sha256").update(JSON.stringify([
    process.versions.electron ? "desktop" : "server",
    process.cwd(), process.env.PORT || "default",
  ])).digest("hex").slice(0, 16);
}

export async function storageOptions(dataDir, instanceKey = hostInstanceKey()) {
  if (!dataDir) throw new Error("Host does not provide the public plugin data directory");
  if (!/^[a-f0-9]{16}$/.test(instanceKey)) throw new Error("Invalid preview instance key");
  const base = resolve(dataDir), slots = join(base, "instances", ".slots");
  mkdirSync(slots, { recursive: true, mode: 0o700 });
  for (let slot = 0; slot < 24; slot++) {
    const file = join(slots, `${slot}.json`);
    const record = { version: 1, instanceKey };
    try {
      validateModel(contract, "instanceSlot", record);
      writeFileSync(file, JSON.stringify(record), { flag: "wx", mode: 0o600 });
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      let stored;
      for (let attempt = 0; attempt < 4; attempt++) {
        try { stored = JSON.parse(readFileSync(file, "utf8")); break; }
        catch (error) { if (attempt === 3) throw error; await delay(20); }
      }
      validateModel(contract, "instanceSlot", stored);
      if (stored.instanceKey !== instanceKey) continue;
    }
    const previous = join(base, "isolated-preview");
    const reuse = slot === 0 && existsSync(previous);
    const rootDir = slot === 0 ? (reuse ? previous : join(base, "preview")) : join(base, "instances", instanceKey);
    return {
      dataDir: slot === 0 ? base : join(rootDir, "state"), rootDir,
      sourceDir: join(rootDir, reuse ? "hermes-web-ui-pereview" : "source"),
      homeDir: join(rootDir, reuse ? "hermes-web-ui-pereview-home" : "home"),
      portSlot: slot,
    };
  }
  throw new Error("Too many Studio preview instances in this plugin data directory");
}
