import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import {
  assertContracts,
  registerRpc,
  validateModel,
} from "./sdk/harness/contracts.mjs";
import { PreviewRunner } from "./src/runner.mjs";
const contract = assertContracts(
  JSON.parse(
    readFileSync(new URL("./contracts/plugin.json", import.meta.url), "utf8"),
  ),
);
/** @param {import('./sdk/src/index').PluginContext} ctx */
export async function apply(ctx) {
  // Capture the plugin lifetime during apply, never a request-scoped run.signal.
  if (!ctx.environment?.webUiHome)
    throw new Error("This plugin requires Studio installation metadata");
  if (!ctx.resources)
    throw new Error("This plugin requires Studio host resource leases");
  const lease = await ctx.resources.claim("studio.version-preview");
  validateModel(contract, "lease", lease.data);
  if (
    resolve(lease.data.sourceDir) !==
      join(resolve(ctx.environment.webUiHome), "hermes-web-ui-pereview") ||
    resolve(lease.data.homeDir) !==
      join(resolve(ctx.environment.webUiHome), "hermes-web-ui-pereview-home")
  )
    throw new Error("Host legacy preview paths are incompatible");
  const runner = new PreviewRunner({
    dataDir: ctx.paths.dataDir,
    environment: ctx.environment,
    config: ctx.config,
    signal: ctx.signal,
  });
  await ctx.lifecycle.acquire(async () => {
    await runner.init();
    return () => runner.close();
  });
  for (const name of ["status", "tags", "stop"])
    registerRpc(ctx, contract, name, () => runner[name]());
  for (const name of ["prepare", "install", "start", "adopt"])
    registerRpc(ctx, contract, name, (input) =>
      runner.accept(name, input || {}),
    );
  registerRpc(ctx, contract, "cancel", () => runner.stop());
}
