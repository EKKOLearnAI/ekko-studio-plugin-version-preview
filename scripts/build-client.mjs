import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import { writeFile, rename, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
const result = await build({
  configFile: false,
  root,
  plugins: [vue()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    write: false,
    target: "es2020",
    lib: { entry: fileURLToPath(new URL("../src/client/index.mjs", import.meta.url)), formats: ["es"] },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
const outputs = (Array.isArray(result) ? result : [result]).flatMap(item => item.output);
if (outputs.length !== 1 || outputs[0].type !== "chunk" || outputs[0].imports.length || outputs[0].dynamicImports.length)
  throw new Error("Plugin client must be one self-contained module");
const file = new URL("../client.mjs", import.meta.url);
const temporary = new URL("../client.mjs.build", import.meta.url);
await writeFile(temporary, outputs[0].code);
await rename(temporary, file);
const packages = new Set();
for (const id of outputs[0].moduleIds || []) {
  const relative = id.split("/node_modules/").at(-1);
  if (relative === id) continue;
  const parts = relative.split("/");
  packages.add(parts[0].startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]);
}
let notices = "Third-party notices for the bundled Version Preview client\n\n";
for (const name of [...packages].sort()) {
  const directory = join(root, "node_modules", name);
  const files = await readdir(directory).catch(() => []);
  const license = files.find(name => /^licen[sc]e(?:\..*)?$/i.test(name));
  if (license) notices += `===== ${name} =====\n${await readFile(join(directory, license), "utf8")}\n\n`;
}
await writeFile(new URL("../THIRD_PARTY_CLIENT_NOTICES.txt", import.meta.url), notices);
console.log(`Built self-contained preview client (${Buffer.byteLength(outputs[0].code)} bytes)`);
