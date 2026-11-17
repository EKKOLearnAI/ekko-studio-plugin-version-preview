import { test, expect } from '@playwright/test';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
let server, url;
const state = {
  preview_dir: '/plugin/preview/source', webui_home: '/plugin/preview/home',
  has_package: true, installed: true, running: false, pid: 0, current_tag: 'main',
  frontend_url: 'http://localhost:8661', action_log_path: '/plugin/action.log', dev_log_path: '/plugin/dev.log',
  dev_log: '', action_log: 'prior state retained', active_action: '', active_action_started_at: '',
  last_action: '', last_action_completed_at: '', last_action_success: false, last_action_message: '',
  recursive_blocked: false,
};
test.beforeAll(async () => {
  const source = await readFile(new URL('../../client.mjs', import.meta.url), 'utf8');
  server = createServer((req, res) => {
    if (req.url === '/client.mjs') { res.setHeader('Content-Type', 'text/javascript'); res.end(source); }
    else { res.setHeader('Content-Type', 'text/html'); res.end('<html><meta charset="utf-8"><style>:root{--studio-color-scheme:dark;--text-primary:#eee;--text-secondary:#bbb;--bg-card:#202024;--theme-card-bg:#202024;--theme-input-bg:#28282d;--border-color:#555;--accent-primary:#91b4ff;--font-family:system-ui}body{background:#16161a;margin:0;padding:24px}*{box-sizing:border-box}</style><div id="root"></div></html>'); }
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  url = `http://127.0.0.1:${server.address().port}`;
});
test.afterAll(() => new Promise(r => server.close(r)));
async function mount(page, options = {}) {
  await page.goto(url);
  await page.evaluate(async ({ state, options }) => {
    window.calls = []; window.disposers = []; window.notices = [];
    window.state = { ...state, ...options.state };
    const { mount } = await import('/client.mjs');
    mount(document.querySelector('#root'), {
      locale: options.locale || 'zh', config: {}, lifecycle: { add: fn => window.disposers.push(fn) },
      rpc: { call: async (name, input) => {
        window.calls.push({ name, input });
        if (name === 'tags') return { tags: [{ name: 'main', sha: '' }, { name: 'v0.8.25', sha: 'a' }] };
        if (['prepare', 'install', 'start'].includes(name)) {
          window.state.active_action = name;
          return { ...window.state, success: true, accepted: true };
        }
        if (name === 'stop') window.state.running = false;
        return { ...window.state, success: true };
      } },
      ui: { notify: (message, level) => window.notices.push({ message, level }) },
    });
  }, { state, options });
  await expect(page.getByRole('button', { name: options.locale === 'en' ? 'Refresh' : '刷新', exact: true })).toBeVisible();
}

test('matches built-in actions, status rows and dependency gating', async ({ page }) => {
  await mount(page, { state: { has_package: false, installed: false } });
  await expect(page.getByRole('button')).toHaveText(['准备代码', '安装依赖', '开启预览', '停止', '刷新']);
  await expect(page.getByRole('button', { name: '准备代码', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: '安装依赖', exact: true })).toBeDisabled();
  await expect(page.getByRole('button', { name: '开启预览', exact: true })).toBeDisabled();
  await expect(page.getByRole('button', { name: '停止', exact: true })).toBeDisabled();
  await expect(page.getByText('当前 Tag', { exact: true })).toBeVisible();
  await expect(page.getByText('仓库就绪', { exact: true })).toBeVisible();
  await expect(page.getByText('依赖已安装', { exact: true })).toBeVisible();
  await expect(page.getByText('运行状态', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /接管|复制|取消/ })).toHaveCount(0);
});

test('selected tag, accepted action and first completion use built-in behavior', async ({ page }) => {
  await mount(page);
  await page.locator('.tag-select').click();
  await page.getByText('v0.8.25', { exact: true }).click();
  await page.getByRole('button', { name: '准备代码', exact: true }).click();
  await expect(page.getByRole('button', { name: '开启预览', exact: true })).toBeDisabled();
  expect(await page.evaluate(() => window.notices)).toHaveLength(0);
  expect(await page.evaluate(() => window.calls.find(x => x.name === 'prepare').input)).toEqual({ tag: 'v0.8.25' });
  await page.evaluate(() => Object.assign(window.state, { active_action: '', current_tag: 'v0.8.25', last_action: 'prepare', last_action_completed_at: 'now', last_action_success: true }));
  await page.getByRole('button', { name: '刷新', exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.notices)).toEqual([{ message: '预览代码已准备好', level: 'success' }]);
  await page.getByRole('button', { name: '刷新', exact: true }).click();
  expect(await page.evaluate(() => window.notices)).toHaveLength(1);
});

test('log content is plain text and opens the resolved preview address', async ({ page }) => {
  await mount(page, { state: { running: true, pid: 123, dev_log: '<script>plain text</script>' } });
  await expect(page.getByRole('button', { name: '停止', exact: true })).toBeEnabled();
  await expect(page.locator('a[target="_blank"]')).toHaveAttribute('href', 'http://127.0.0.1:8661/');
  await expect(page.locator('pre').nth(1)).toContainText('<script>plain text</script>');
  await page.getByRole('button', { name: '停止', exact: true }).click();
  expect(await page.evaluate(() => window.calls.some(x => x.name === 'stop'))).toBe(true);
  await page.evaluate(() => window.disposers.forEach(fn => fn()));
  await expect(page.getByRole('button')).toHaveCount(0);
});

test('same layout stays readable at mobile width and follows light/dark themes', async ({ page }) => {
  await mount(page);
  await page.screenshot({ path: process.env.PREVIEW_SCREENSHOT || '/tmp/version-preview-ui-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  if (process.env.PREVIEW_MOBILE_SCREENSHOT) await page.screenshot({ path: process.env.PREVIEW_MOBILE_SCREENSHOT, fullPage: true });
  await page.evaluate(() => {
    const s = document.documentElement.style;
    for (const [key, value] of Object.entries({ '--studio-color-scheme': 'light', '--text-primary': '#222', '--text-secondary': '#666', '--theme-card-bg': '#fff', '--theme-input-bg': '#fff', '--border-color': '#ddd', '--accent-primary': '#2080f0' })) s.setProperty(key, value);
    document.body.style.background = '#fff';
  });
  await expect(page.getByRole('button', { name: '准备代码', exact: true })).toBeVisible();
  if (process.env.PREVIEW_LIGHT_SCREENSHOT) await page.screenshot({ path: process.env.PREVIEW_LIGHT_SCREENSHOT, fullPage: true });
});

test('English recursive preview disables actions and explains the restriction', async ({ page }) => {
  await mount(page, { locale: 'en', state: { recursive_blocked: true } });
  await expect(page.getByText('A preview instance cannot launch another preview.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start Preview', exact: true })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Prepare Code', exact: true })).toBeDisabled();
});
