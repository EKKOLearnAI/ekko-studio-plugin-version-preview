/** Independent supervisor. All descendants inherit its exclusive process group. */
import { spawn } from "node:child_process";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { previewConfig } from "./runtime-config.mjs";

const [sourceDir, backend, frontend] = process.argv.slice(2);
const backendPort = Number(backend),
  frontendPort = Number(frontend);
if (!sourceDir || !backendPort || !frontendPort)
  throw new Error("Invalid preview launch arguments");
const require = createRequire(join(sourceDir, "package.json"));
const vite = await import(pathToFileURL(require.resolve("vite")).href);
let server,
  backendChild,
  closing = false;
async function close(code = 0) {
  if (closing) return;
  closing = true;
  await server?.close().catch(() => {});
  if (backendChild?.exitCode === null) backendChild.kill("SIGTERM");
  // The parent also enforces a bounded process-group stop, including stubborn descendants.
  process.exitCode = code;
}
process.on("SIGTERM", () => {
  void close();
});
process.on("SIGINT", () => {
  void close();
});
try {
  backendChild = spawn(
    process.execPath,
    [
      "-r",
      require.resolve("ts-node/register"),
      join(sourceDir, "packages/server/src/index.ts"),
    ],
    {
      cwd: sourceDir,
      stdio: ["ignore", "inherit", "inherit"],
      windowsHide: true,
      env: {
        ...process.env,
        TS_NODE_PROJECT: join(sourceDir, "packages/server/tsconfig.json"),
        PORT: String(backendPort),
      },
    },
  );
  backendChild.on("error", (error) => {
    console.error(error);
    void close(1);
  });
  backendChild.on("exit", (code) => {
    if (!closing) void close(code || 1);
  });
  server = await vite.createServer(
    await previewConfig({ sourceDir, backendPort, frontendPort }, vite),
  );
  if (closing) await server.close();
  else {
    await server.listen();
    console.log(
      `[preview] frontend http://127.0.0.1:${frontendPort}; backend ${backendPort}`,
    );
  }
} catch (error) {
  console.error(error);
  await close(1);
}
