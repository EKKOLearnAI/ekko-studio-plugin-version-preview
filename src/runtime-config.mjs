/** Adapt development configuration through Vite's public API; target files stay untouched. */
import { join } from "node:path";
import { createRequire } from "node:module";

export function rewriteDirectWebsocketPorts(source, id, port, ts) {
  // Parse script sections in Vue SFCs before their compiler runs. Replace numeric
  // arguments structurally, without depending on an upstream preview patcher.
  const sections = id.split("?")[0].endsWith(".vue")
    ? [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi)].map(
        (match) => ({
          text: match[1],
          offset: match.index + match[0].indexOf(">") + 1,
        }),
      )
    : [{ text: source, offset: 0 }];
  const edits = [];
  for (const section of sections) {
    const ast = ts.createSourceFile(
      id,
      section.text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    function visit(node) {
      if (
        ts.isCallExpression(node) &&
        node.expression.getText(ast) === "formatHostForPort" &&
        node.arguments.length === 2
      ) {
        const [host, target] = node.arguments;
        if (
          host.getText(ast) === "location.hostname" &&
          ts.isNumericLiteral(target)
        ) {
          edits.push({
            start: section.offset + target.getStart(ast),
            end: section.offset + target.end,
          });
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
  }
  for (const edit of edits.sort((a, b) => b.start - a.start))
    source =
      source.slice(0, edit.start) + String(port) + source.slice(edit.end);
  return source;
}

export async function previewConfig(
  { sourceDir, backendPort, frontendPort },
  vite,
) {
  const require = createRequire(join(sourceDir, "package.json"));
  const ts = require("typescript");
  const loaded = await vite.loadConfigFromFile(
    { command: "serve", mode: "development" },
    join(sourceDir, "vite.config.ts"),
    sourceDir,
  );
  if (!loaded)
    throw new Error("Studio source has no readable Vite configuration");
  const proxy = Object.fromEntries(
    Object.entries(loaded.config.server?.proxy || {}).map(([name, value]) => [
      name,
      {
        ...(typeof value === "object" ? value : {}),
        target: `http://127.0.0.1:${backendPort}`,
        ws: true,
      },
    ]),
  );
  // Add standard routes when a historical config did not declare them.
  for (const name of ["/api", "/socket.io"])
    proxy[name] ||= { target: `http://127.0.0.1:${backendPort}`, ws: true };
  const guard = {
    name: "independent-version-preview",
    enforce: "pre",
    transform(code, id) {
      if (
        !/\.(?:vue|[cm]?[jt]sx?)(?:\?|$)/.test(id) ||
        id.includes("node_modules")
      )
        return;
      const next = rewriteDirectWebsocketPorts(code, id, backendPort, ts);
      return next === code ? undefined : { code: next, map: null };
    },
    transformIndexHtml: {
      order: "pre",
      handler: () => [
        {
          tag: "script",
          injectTo: "head-prepend",
          children: `(()=>{const get=Storage.prototype.getItem;Storage.prototype.getItem=function(key){return this===localStorage&&key==='hermes_server_url'?null:get.call(this,key)}})();`,
        },
      ],
    },
  };
  return {
    ...loaded.config,
    configFile: false,
    root: join(sourceDir, "packages/client"),
    plugins: [guard, ...(loaded.config.plugins || [])],
    server: {
      ...loaded.config.server,
      host: "0.0.0.0",
      port: frontendPort,
      strictPort: true,
      proxy,
    },
  };
}
