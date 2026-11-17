import { createApp, h, shallowRef } from "vue";
import { NConfigProvider, darkTheme } from "naive-ui";
import Preview from "./Preview.vue";
import css from "./preview.css?inline";

export function mount(root, ctx) {
  const style = document.createElement("style");
  style.textContent = css;
  const container = document.createElement("div");
  container.className = "version-preview-client";
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
    theme: theme.value, themeOverrides: overrides.value,
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
