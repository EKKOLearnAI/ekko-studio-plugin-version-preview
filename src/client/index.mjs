import { createApp, h, shallowRef } from "vue";
import { NConfigProvider, darkTheme, enUS, zhCN, zhTW, jaJP, koKR, frFR, esAR, deDE, ptBR, ruRU, arDZ, trTR } from "naive-ui";
import { alertRtl } from "naive-ui/es/alert/styles";
import { buttonRtl } from "naive-ui/es/button/styles";
import { inputRtl } from "naive-ui/es/input/styles";
import { popoverRtl } from "naive-ui/es/popover/styles";
import { selectRtl } from "naive-ui/es/select/styles";
import { spaceRtl } from "naive-ui/es/space/styles";
import { tagRtl } from "naive-ui/es/tag/styles";
import { resolvePluginLocale } from "../../sdk/src/localization.mjs";
import { messages } from "./messages.js";
const locales = { en: enUS, zh: zhCN, "zh-TW": zhTW, ja: jaJP, ko: koKR, fr: frFR, es: esAR, de: deDE, pt: ptBR, ru: ruRU, ar: arDZ, tr: trTR };
const rtl = [alertRtl, buttonRtl, inputRtl, popoverRtl, selectRtl, spaceRtl, tagRtl];
import Preview from "./Preview.vue";
import css from "./preview.css?inline";

export function mount(root, ctx) {
  const locale = resolvePluginLocale(ctx.locale, Object.keys(messages));
  const style = document.createElement("style");
  style.textContent = css;
  const container = document.createElement("div");
  container.className = "version-preview-client";
  container.lang = locale;
  container.dir = locale === "ar" ? "rtl" : "ltr";
  root.append(style, container);
  const theme = shallowRef(null), overrides = shallowRef({});
  function applyTheme() {
    const values = getComputedStyle(root);
    const value = (name) => values.getPropertyValue(name).trim();
    theme.value = value("--studio-color-scheme") === "dark" ? darkTheme : null;
    const common = {};
    for (const [key, name] of Object.entries({
      primaryColor: "--accent-primary", textColorBase: "--text-primary",
      textColor2: "--text-secondary", borderColor: "--border-color",
      cardColor: "--theme-card-bg", inputColor: "--theme-input-bg",
      fontFamily: "--font-family", fontSize: "--font-size-base",
    })) if (value(name)) common[key] = value(name);
    overrides.value = { common };
  }
  applyTheme();
  const observer = new MutationObserver(applyTheme);
  for (const element of [document.documentElement, document.body, root])
    observer.observe(element, { attributes: true, attributeFilter: ["class", "style"] });
  const app = createApp({ render: () => h(NConfigProvider, {
    theme: theme.value, themeOverrides: overrides.value, locale: locales[locale], rtl: locale === "ar" ? rtl : undefined,
  }, { default: () => h(Preview, { context: ctx }) }) });
  app.mount(container);
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    app.unmount();
    container.remove();
    style.remove();
  };
  ctx.lifecycle.add(dispose);
  return dispose;
}
