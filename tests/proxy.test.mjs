import { test } from "node:test";
import assert from "node:assert/strict";
import { parseSystemProxy, cleanEnvironment } from "../src/processes.mjs";

const systemProxy = `<dictionary> {
  HTTPEnable : 1
  HTTPProxy : 127.0.0.1
  HTTPPort : 7897
  HTTPSEnable : 1
  HTTPSProxy : 127.0.0.1
  HTTPSPort : 7897
}`;

test("GUI-launched apps pass enabled system proxies to Git/npm without host secrets", () => {
  const proxies = parseSystemProxy(systemProxy);
  const env = cleanEnvironment({ PATH: "/usr/bin", AUTH_TOKEN: "secret", NODE_OPTIONS: "--inspect" }, proxies);
  assert.equal(env.http_proxy, "http://127.0.0.1:7897");
  assert.equal(env.https_proxy, "http://127.0.0.1:7897");
  assert.equal(env.no_proxy, "localhost,127.0.0.1,::1");
  assert.equal(env.AUTH_TOKEN, undefined);
  assert.equal(env.NODE_OPTIONS, undefined);
});

test("explicit proxy and bypass settings keep priority over the system proxy", () => {
  const env = cleanEnvironment({ HTTPS_PROXY: "http://proxy.example:8080", NO_PROXY: "example.test" }, parseSystemProxy(systemProxy));
  assert.equal(env.HTTPS_PROXY, "http://proxy.example:8080");
  assert.equal(env.https_proxy, undefined);
  assert.equal(env.NO_PROXY, "example.test");
  assert.equal(env.no_proxy, undefined);
  assert.deepEqual(cleanEnvironment({ ALL_PROXY: "socks5://localhost:1080" }, parseSystemProxy(systemProxy)), { ALL_PROXY: "socks5://localhost:1080" });
});

test("disabled, malformed or incomplete system proxies are ignored", () => {
  assert.deepEqual(parseSystemProxy(systemProxy.replaceAll("Enable : 1", "Enable : 0")), {});
  assert.deepEqual(parseSystemProxy("HTTPEnable : 1\nHTTPProxy : bad/path\nHTTPPort : 7897"), {});
  assert.deepEqual(parseSystemProxy("HTTPEnable : 1\nHTTPProxy : localhost\nHTTPPort : 99999"), {});
  assert.deepEqual(parseSystemProxy("ProxyAutoConfigEnable : 1"), {});
});
