import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  workers: 1,
  reporter: "list",
  outputDir:
    process.env.PREVIEW_E2E_OUTPUT ||
    "../task-reports/version-preview-plugin-20261117/playwright-results",
  use: {
    browserName: "chromium",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
});
