import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { PreviewRunner } from '../src/runner.mjs';

async function fixture(t, options) {
  const dataDir = await mkdtemp(join(tmpdir(), 'preview-tag-catalog-'));
  const runner = new PreviewRunner({ dataDir, ...options });
  t.after(async () => { await runner.close(); await rm(dataDir, { recursive: true, force: true }); });
  await runner.init();
  await mkdir(runner.source, { recursive: true });
  await writeFile(join(runner.source, 'user-change.txt'), 'preserve');
  return runner;
}
function catalog(items) {
  const tags = items.map(([name, pkg], i) => ({ name, pkg, sha: (i + 1).toString(16).padStart(40, '0') }));
  const calls = [];
  return { tags, calls, processes: {
    async run(command, args, options) {
      calls.push({ command, args, options });
      if (args[0] === 'ls-remote') return tags.map(t => `${t.sha}\trefs/tags/${t.name}`).join('\n');
      if (command === 'curl') return JSON.stringify(tags.find(t => args.at(-1).includes(t.sha)).pkg);
      if (args[0] === 'show') return JSON.stringify(tags.find(t => args[1].startsWith(t.sha)).pkg);
      return '';
    },
    async close() {},
  } };
}

test('filters higher Android tags by source version before choosing eight Studio versions', async t => {
  const android = Array.from({ length: 10 }, (_, i) => [`v1.0.${i}`, { name: 'ekko-studio', version: '0.8.11' }]);
  const studio = Array.from({ length: 10 }, (_, i) => [`v0.8.${25 - i}`, { name: 'ekko-studio', version: `0.8.${25 - i}`, scripts: {} }]);
  const mock = catalog([...android, ...studio]);
  const runner = await fixture(t, { processes: mock.processes, fetchImpl: async url => new Response(JSON.stringify(mock.tags.find(t => url.includes(t.sha)).pkg)) });
  const [first, second] = await Promise.all([runner.tags(), runner.tags()]);
  assert.deepEqual(first.tags.map(t => t.name), ['main', ...studio.slice(0, 8).map(t => t[0])]);
  assert.deepEqual(second, first);
  assert.equal(mock.calls.filter(c => c.args[0] === 'ls-remote').length, 1);
  assert.deepEqual(await runner.tags(), first);
  assert.equal(mock.calls.filter(c => c.args[0] === 'ls-remote').length, 1);
  assert.equal(await readFile(join(runner.source, 'user-change.txt'), 'utf8'), 'preserve');
  assert.ok(mock.calls.filter(c => c.args[0] !== 'ls-remote' && c.command === 'git').every(c => c.options.cwd !== runner.source));
});

test('recognizes old Studio package name and matching prereleases, excludes other packages', async t => {
  const mock = catalog([
    ['v9.0.0', { name: 'mobile-app', version: '9.0.0' }],
    ['v0.8.26-rc.1', { name: 'ekko-studio', version: '0.8.26-rc.1' }],
    ['v0.8.25', { name: 'hermes-web-ui', version: '0.8.25' }],
    ['v0.8.24', { name: 'ekko-studio', version: '0.8.23' }],
  ]);
  const runner = await fixture(t, { processes: mock.processes, fetchImpl: async url => new Response(JSON.stringify(mock.tags.find(t => url.includes(t.sha)).pkg)) });
  assert.deepEqual((await runner.tags()).tags.map(t => t.name), ['main', 'v0.8.26-rc.1', 'v0.8.25']);
});

test('API fallback verifies metadata and never returns unverifiable tags as Studio versions', async t => {
  const sha = 'a'.repeat(40);
  let offline = false;
  const runner = await fixture(t, {
    processes: { async run(command) { if (command === 'curl' && !offline) return JSON.stringify({ name: 'ekko-studio', version: '0.8.25' }); throw new Error('Git unavailable'); }, async close() {} },
    fetchImpl: async url => offline ? new Response('offline', { status: 503 }) : new Response(JSON.stringify(
      url.includes('/tags?') ? [{ name: 'v0.8.25', commit: { sha } }] : { name: 'ekko-studio', version: '0.8.25' }
    )),
  });
  assert.deepEqual((await runner.tags()).tags.map(t => t.name), ['main', 'v0.8.25']);
  runner.tagsCache = null;
  runner.tagPackages.clear();
  offline = true;
  await assert.rejects(runner.tags(), /503/);
  assert.equal(runner.tagsJob, null);
});

test('closing aborts metadata work shared by concurrent refreshes', async t => {
  let ready;
  const started = new Promise(resolve => { ready = resolve; });
  const runner = await fixture(t, { processes: {
    async run(command, args, { signal }) {
      if (args[0] === 'ls-remote') return `${'a'.repeat(40)}\trefs/tags/v0.8.25`;
      ready();
      await delay(60000, undefined, { signal });
      return '';
    },
    async close() {},
  } });
  const pending = runner.tags();
  const rejected = assert.rejects(pending, /abort|cancelled/i);
  await started;
  await runner.close();
  await rejected;
});

test('uses a separate Git catalog when public metadata is inaccessible', async t => {
  const mock = catalog([['v0.8.25', { name: 'ekko-studio', version: '0.8.25' }]]);
  const originalRun = mock.processes.run;
  mock.processes.run = async (command, args, options) => {
    if (command === 'curl') throw new Error('Public source requires credentials');
    return originalRun(command, args, options);
  };
  const runner = await fixture(t, {
    processes: mock.processes,
    fetchImpl: async () => new Response('private', { status: 404 }),
  });
  assert.deepEqual((await runner.tags()).tags.map(t => t.name), ['main', 'v0.8.25']);
  assert.ok(mock.calls.some(c => c.args[0] === 'fetch'));
  assert.ok(mock.calls.some(c => c.args[0] === 'show'));
  assert.equal(await readFile(join(runner.source, 'user-change.txt'), 'utf8'), 'preserve');
});
