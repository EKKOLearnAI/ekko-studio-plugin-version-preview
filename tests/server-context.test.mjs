import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, mkdir, writeFile, readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer } from 'node:net';
import { runtimeOptions, apply } from '../server.mjs';
import { PreviewRunner } from '../src/runner.mjs';
import { storageOptions } from '../src/storage.mjs';
const manifest = JSON.parse(readFileSync(new URL('../plugin.json', import.meta.url), 'utf8'));
const defaults = () => Object.fromEntries(Object.entries(manifest.configSchema.properties).map(([key, schema]) => [key, schema.default]));
async function directory(t) {
  const dir = await mkdtemp(join(tmpdir(), 'preview-independent-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  return dir;
}

test('every host uses public plugin storage without touching built-in resources', async t => {
  const dir = await directory(t);
  const options = await runtimeOptions({ paths: { dataDir: dir }, config: defaults(),
    environment: { webUiHome: '/must-not-use', studio: null, isPreview: false },
    resources: { claim() { throw new Error('Built-in lease must not be used'); } },
  });
  assert.ok(options.rootDir.startsWith(dir));
  assert.ok(options.sourceDir.endsWith('/source'));
  assert.equal(options.config.frontendPort, 0);
  const r = new PreviewRunner(options); await r.init(); t.after(() => r.close());
  const s = await r.status();
  assert.equal(s.storage_mode, 'isolated');
  assert.ok(s.agent_bridge_endpoint.startsWith('tcp://127.0.0.1:'));
});

test('old SDK mounts the complete page RPC with manifest defaults and no host API', async t => {
  const dir = await directory(t), handlers = new Map(), disposers = [];
  await apply({ paths: { dataDir: dir }, config: defaults(), signal: new AbortController().signal,
    host: { request() { throw new Error('Unexpected host API'); } },
    lifecycle: { async acquire(fn) { const dispose = await fn(); disposers.push(dispose); return dispose; } },
    extensions: { rpc: { register(name, fn) { handlers.set(name, fn); } } },
  });
  t.after(async () => { for (const fn of disposers.reverse()) await fn(); });
  const s = await handlers.get('status')(null);
  assert.equal(s.has_package, false);
  assert.equal(s.storage_mode, 'isolated');
  assert.equal(handlers.has('adopt'), false);
  assert.deepEqual([...handlers.keys()].sort(), ['cancel', 'install', 'prepare', 'start', 'status', 'stop', 'tags']);
});

test('desktop and development instances get stable separate storage and worker port ranges', async t => {
  const dir = await directory(t);
  const a = await storageOptions(dir, 'aaaaaaaaaaaaaaaa');
  const b = await storageOptions(dir, 'bbbbbbbbbbbbbbbb');
  assert.notEqual(a.rootDir, b.rootDir);
  assert.notEqual(a.dataDir, b.dataDir);
  assert.deepEqual(await storageOptions(dir, 'aaaaaaaaaaaaaaaa'), a);
  const ra = new PreviewRunner(a), rb = new PreviewRunner(b);
  await ra.init(); t.after(() => ra.close());
  await rb.init(); t.after(() => rb.close());
  assert.notEqual(ra.frontendPort, rb.frontendPort);
  assert.ok(Math.abs(ra.workerPortBase - rb.workerPortBase) >= 1000);
});

test('existing plugin-owned preview data is kept in place when internal preview is removed', async t => {
  const dir = await directory(t), root = join(dir, 'isolated-preview');
  const home = join(root, 'hermes-web-ui-pereview-home');
  await mkdir(home, { recursive: true });
  await writeFile(join(home, 'database.db'), 'keep');
  const options = await storageOptions(dir, 'aaaaaaaaaaaaaaaa');
  assert.equal(options.homeDir, home);
  const r = new PreviewRunner(options); await r.init(); t.after(() => r.close());
  assert.equal(await readFile(join(home, 'database.db'), 'utf8'), 'keep');
});

test('automatic ports recover from occupancy while custom ports are preserved', async t => {
  const dir = await directory(t), server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const occupied = server.address().port;
  const r = new PreviewRunner({ dataDir: dir });
  r.backendPort = occupied;
  await r.init(); t.after(() => r.close());
  assert.notEqual(r.backendPort, occupied);
  const custom = new PreviewRunner({ dataDir: join(dir, 'custom'), config: { frontendPort: 8761, backendPort: 8760, bridgePort: 18760, workerPortBase: 22000 } });
  await custom.init(); t.after(() => custom.close());
  assert.equal(custom.frontendPort, 8761);
  assert.equal(custom.backendPort, 8760);
});

test('automatic ports survive a normal reload and old default configuration upgrades automatically', async t => {
  const dir = await directory(t);
  const options = await runtimeOptions({ paths: { dataDir: dir }, config: { frontendPort: 8651, backendPort: 8650, bridgePort: 18650, workerPortBase: 19650 } });
  for (const key of ['frontendPort', 'backendPort', 'bridgePort', 'workerPortBase']) assert.equal(options.config[key], 0);
  const r = new PreviewRunner(options);
  // Give this persistence test its own seed ports, away from other runners and
  // their temporary availability probes in parallel test files.
  for (const key of ['frontendPort', 'backendPort', 'bridgePort', 'workerPortBase']) {
    let port;
    do {
      const probe = createServer();
      await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
      port = probe.address().port;
      await new Promise(resolve => probe.close(resolve));
    } while (port > 64500);
    r[key] = port;
  }
  await r.init();
  const ports = r.state.ports; await r.close();
  const next = new PreviewRunner(options); await next.init(); t.after(() => next.close());
  assert.deepEqual(next.state.ports, ports);
});
