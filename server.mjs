import { readFileSync } from "node:fs";
import {
  assertContracts,
  registerRpc,
} from "./sdk/harness/contracts.mjs";
import { PreviewRunner } from "./src/runner.mjs";
import { storageOptions } from "./src/storage.mjs";
const contract = assertContracts(
  JSON.parse(
    readFileSync(new URL("./contracts/plugin.json", import.meta.url), "utf8"),
  ),
);
/** Preview storage and ports belong to the plugin on every host. */
export async function runtimeOptions(ctx) {
  const config = { ...ctx.config };
  config.repository ||= "https://github.com/EKKOLearnAI/ekko-studio";
  for (const [key, previous] of Object.entries({
    frontendPort: [8651, 8661], backendPort: [8650, 8660],
    bridgePort: [18650, 18660], workerPortBase: [19650, 19660],
  })) if (config[key] == null || previous.includes(config[key])) config[key] = 0;
  return { ...await storageOptions(ctx.paths?.dataDir), config, signal: ctx.signal,
    isPreview: process.env.VITE_HERMES_PREVIEW === "1" };
}
/** @param {import('./sdk/src/index').PluginContext} ctx */
export async function apply(ctx) {
  const runner = new PreviewRunner(await runtimeOptions(ctx));
  await ctx.lifecycle.acquire(async () => {
    await runner.init();
    return () => runner.close();
  });
  for (const name of ["status", "tags", "stop"])
    registerRpc(ctx, contract, name, () => runner[name]());
  for (const name of ["prepare", "install", "start"])
    registerRpc(ctx, contract, name, (input) =>
      runner.accept(name, input || {}),
    );
  registerRpc(ctx, contract, "cancel", () => runner.stop());
}
