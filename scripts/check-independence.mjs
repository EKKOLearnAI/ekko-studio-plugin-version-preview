import ts from "typescript";
import { readFile, readdir, realpath, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve, relative, isAbsolute } from "node:path";
const root = await realpath(fileURLToPath(new URL("../", import.meta.url)));
const files = [
  "server.mjs",
  "client.mjs",
  ...(await readdir(join(root, "src")))
    .filter((x) => x.endsWith(".mjs"))
    .map((x) => "src/" + x),
];
const imports = [];
for (const file of files) {
  const source = await readFile(join(root, file), "utf8"),
    ast = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.JS,
    );
  function visit(node) {
    if (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      const spec = node.moduleSpecifier.text;
      if (spec.startsWith(".")) {
        const target = resolve(root, dirname(file), spec),
          offset = relative(root, target);
        if (offset.startsWith("..") || isAbsolute(offset))
          throw new Error("Runtime import escapes package: " + spec);
        imports.push({ file, spec, kind: "bundled" });
      } else if (spec.startsWith("node:") || spec === "tar")
        imports.push({
          file,
          spec,
          kind: spec === "tar" ? "own dependency" : "Node standard library",
        });
      else throw new Error("Unexpected runtime dependency: " + spec);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  if (
    source.includes("/api/studio/update/preview") ||
    source.includes("version-preview-manager") ||
    source.includes("applyPreviewRuntimePatch")
  )
    throw new Error("Built-in preview coupling detected: " + file);
}
const result = {
  success: true,
  files,
  imports,
  hostRuntimeInterfaces: [
    "PluginContext.environment (optional metadata only)",
    "PluginContext.paths.dataDir",
    "PluginContext.extensions.rpc",
    "PluginContext.lifecycle",
  ],
  targetApplicationTooling: [
    "Vite public API",
    "TypeScript AST API",
    "ts-node/register",
  ],
  note: "Target Studio is downloaded as the application being previewed. No built-in preview manager/API is imported or invoked. Public SDK contracts are bundled.",
};
if (process.argv[2])
  await writeFile(process.argv[2], JSON.stringify(result, null, 2) + "\n");
console.log(
  `Independent runtime graph checked: ${files.length} modules, ${imports.length} declared imports`,
);
