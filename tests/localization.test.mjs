import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { messages } from '../src/client/messages.js';
import { PLUGIN_LOCALES, validatePluginI18n, resolvePluginLocale } from '../sdk/src/localization.mjs';
const manifest = JSON.parse(readFileSync(new URL('../plugin.json', import.meta.url), 'utf8'));
test('manifest and preview UI cover every Studio language with complete native strings', () => {
  validatePluginI18n(manifest, { required: true });
  assert.deepEqual(Object.keys(messages), [...PLUGIN_LOCALES]);
  assert.deepEqual(Object.keys(manifest.i18n), [...PLUGIN_LOCALES]);
  for (const locale of PLUGIN_LOCALES) {
    assert.deepEqual(Object.keys(messages[locale]).sort(), Object.keys(messages.en).sort());
    assert.equal(manifest.i18n[locale].name, messages[locale].title);
    for (const value of Object.values(messages[locale])) assert.ok(typeof value === 'string' && value.trim());
    if (locale !== 'en') assert.notEqual(manifest.i18n[locale].description, manifest.i18n.en.description);
  }
  assert.equal(resolvePluginLocale('zh-TW'), 'zh-TW');
  assert.equal(resolvePluginLocale('ar-SA'), 'ar');
  assert.equal(resolvePluginLocale('ja-JP'), 'ja');
  assert.equal(resolvePluginLocale('unknown'), 'en');
});
