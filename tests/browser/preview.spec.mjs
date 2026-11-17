import { test, expect } from "@playwright/test";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
let server, url;
const state = {
  preview_dir: "/isolated/hermes-web-ui-pereview",
  webui_home: "/isolated/hermes-web-ui-pereview-home",
  exists: true,
  has_package: true,
  installed: true,
  running: false,
  pid: 0,
  current_tag: "main",
  frontend_url: "http://localhost:8651",
  frontend_port: 8651,
  agent_bridge_endpoint: "ipc:///isolated/agent-bridge.sock",
  log_path: "/isolated/dev.log",
  dev_log_path: "/isolated/dev.log",
  action_log_path: "/isolated/action.log",
  dev_log: "",
  action_log: "prior state retained",
  active_action: "",
  active_action_started_at: "",
  last_action: "",
  last_action_completed_at: "",
  last_action_success: false,
  last_action_message: "",
  last_action_code: "",
  backups: [],
  recursive_blocked: false,
  source_commit: "",
};
test.beforeAll(async () => {
  const source = await readFile(
    new URL("../../client.mjs", import.meta.url),
    "utf8",
  );
  server = createServer((req, res) => {
    if (req.url === "/client.mjs") {
      res.setHeader("Content-Type", "text/javascript");
      res.end(source);
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(
        '<html><meta charset="utf-8"><style>:root{--text-primary:#eee;--text-secondary:#bbb;--bg-card:#202024;--bg-input:#28282d;--border-color:#555;--accent-primary:#91b4ff;--error:#ffb4b4}body{background:#16161a;margin:0}</style><div id="root"></div></html>',
      );
    }
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  url = `http://127.0.0.1:${server.address().port}`;
});
test.afterAll(() => new Promise((r) => server.close(r)));
async function mount(page, { locale = "zh", recursive = false } = {}) {
  await page.goto(url);
  await page.evaluate(
    async ({ state, locale, recursive }) => {
      window.calls = [];
      window.disposers = [];
      window.notices = [];
      window.state = { ...state, recursive_blocked: recursive };
      const { mount } = await import("/client.mjs");
      await mount(document.querySelector("#root"), {
        locale,
        config: {},
        lifecycle: { add: (fn) => window.disposers.push(fn) },
        rpc: {
          call: async (name, input) => {
            window.calls.push({ name, input });
            if (name === "tags")
              return {
                tags: [
                  { name: "main", sha: "" },
                  { name: "v0.8.25", sha: "a" },
                ],
              };
            if (["stop", "cancel"].includes(name))
              window.state.active_action = "";
            if (name === "prepare") window.state.active_action = "prepare";
            return { ...window.state };
          },
        },
        ui: {
          confirm: async () => true,
          notify: (message, level) => window.notices.push({ message, level }),
        },
      });
    },
    { state, locale, recursive },
  );
}
test("prepare, cancel, completion log, adoption and responsive open URL", async ({
  page,
}) => {
  await mount(page);
  await page.getByRole("combobox").selectOption("v0.8.25");
  await page.getByRole("button", { name: "准备源码", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "取消操作", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "启动预览", exact: true }),
  ).toBeDisabled();
  await page.getByRole("button", { name: "取消操作", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "准备源码", exact: true }),
  ).toBeEnabled();
  await page.getByRole("button", { name: "接管旧预览", exact: true }).click();
  expect(
    await page.evaluate(() =>
      window.calls.some((x) => x.name === "adopt" && x.input.confirm),
    ),
  ).toBe(true);
  await page.evaluate(() => {
    window.state = {
      ...window.state,
      running: true,
      last_action: "start",
      last_action_completed_at: "now",
      last_action_success: true,
      last_action_message: "Preview started",
      dev_log: "<script>must be plain text</script>",
    };
  });
  await page.getByRole("button", { name: "刷新", exact: true }).click();
  await expect(page.getByRole("link", { name: "打开预览" })).toHaveAttribute(
    "href",
    "http://127.0.0.1:8651/",
  );
  await expect(page.getByLabel("运行日志")).toContainText(
    "<script>must be plain text</script>",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path:
      process.env.PREVIEW_SCREENSHOT ||
      "../task-reports/version-preview-plugin-20261117/preview-mobile.png",
    fullPage: true,
  });
  await page.evaluate(() => window.disposers.forEach((fn) => fn()));
  await expect(page.getByRole("heading", { name: "版本预览" })).toHaveCount(0);
});
test("English recursive preview disables mutations and shows a clear reason", async ({
  page,
}) => {
  await mount(page, { locale: "en", recursive: true });
  await expect(
    page.getByRole("heading", { name: "Version Preview", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("alert")).toContainText(
    "cannot launch another preview",
  );
  await expect(
    page.getByRole("button", { name: "Start preview", exact: true }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Prepare source", exact: true }),
  ).toBeDisabled();
});
