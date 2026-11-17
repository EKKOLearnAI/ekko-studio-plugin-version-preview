const messages = {
  zh: {
    title: "版本预览",
    description:
      "选择 Studio 源码版本，在独立数据目录中运行预览。准备新版本会保留旧源码备份。",
    refresh: "刷新",
    prepare: "准备源码",
    install: "安装依赖",
    start: "启动预览",
    stop: "停止预览",
    cancel: "取消操作",
    adopt: "接管旧预览",
    adoptConfirm: "停止可验证归属的旧预览进程，并沿用已有预览数据？",
    open: "打开预览",
    copy: "复制预览地址",
    loading: "加载中…",
    idle: "空闲",
    running: "运行中",
    ready: "源码已准备",
    missing: "尚未准备",
    installed: "依赖已安装",
    notInstalled: "需要安装依赖",
    actionLog: "操作日志",
    devLog: "运行日志",
    source: "源码目录",
    home: "预览数据",
    backups: "保留源码备份",
    recursive: "预览子实例不能再次启动预览。",
    accepted: "任务已接受，请查看状态与日志。",
    stopped: "任务与预览已停止",
    remote: "远程访问需开放预览端口或在插件配置中填写反向代理入口。",
    last: "最近结果",
    copyFailed: "复制失败，请手动复制地址。",
    failed: "操作失败",
    copied: "地址已复制",
  },
  en: {
    title: "Version Preview",
    description:
      "Run a Studio source ref with a separate data home. Preparing a new ref retains a backup of the previous source.",
    refresh: "Refresh",
    prepare: "Prepare source",
    install: "Install dependencies",
    start: "Start preview",
    stop: "Stop preview",
    cancel: "Cancel operation",
    adopt: "Adopt legacy preview",
    adoptConfirm:
      "Stop verified legacy preview processes and reuse the existing preview data?",
    open: "Open preview",
    copy: "Copy preview URL",
    loading: "Loading…",
    idle: "Idle",
    running: "Running",
    ready: "Source prepared",
    missing: "No source",
    installed: "Dependencies installed",
    notInstalled: "Install dependencies",
    actionLog: "Action log",
    devLog: "Runtime log",
    source: "Source directory",
    home: "Preview data",
    backups: "Retained source backups",
    recursive: "A preview instance cannot launch another preview.",
    accepted: "Task accepted. Check status and logs for its result.",
    stopped: "Tasks and preview stopped",
    remote:
      "Remote access requires the preview port or a configured reverse proxy URL.",
    last: "Last result",
    copyFailed: "Copy failed. Copy the URL manually.",
    failed: "Operation failed",
    copied: "URL copied",
  },
};
export async function mount(root, ctx) {
  const t = messages[ctx.locale?.startsWith("zh") ? "zh" : "en"];
  let stopped = false,
    timer,
    busy = false,
    status,
    seen = "",
    loading = true;
  const style = document.createElement("style");
  style.textContent = `
  .vp{font-family:var(--font-family,system-ui);color:var(--text-primary);padding:24px;max-width:1100px;margin:auto;box-sizing:border-box}
  .vp h1{font-size:22px;margin:0 0 10px}.vp p{color:var(--text-secondary);line-height:1.6}.vp .toolbar{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}
  .vp button,.vp select,.vp a{font:inherit;padding:9px 13px;border:1px solid var(--theme-input-border,var(--border-color));border-radius:var(--theme-input-radius,var(--radius-component,8px));color:var(--text-primary);background:var(--theme-input-bg,var(--bg-input));cursor:pointer;text-decoration:none}
  .vp button:disabled,.vp select:disabled{opacity:.45;cursor:default}.vp .primary{color:var(--accent-primary)}.vp .error{color:var(--error);white-space:pre-wrap;overflow-wrap:anywhere}
  .vp .panel{background:var(--theme-card-bg,var(--bg-card));border:1px solid var(--theme-card-border,var(--border-color));border-radius:var(--theme-card-radius,var(--radius-component,10px));padding:16px;margin:16px 0;box-shadow:var(--theme-card-shadow,none);backdrop-filter:var(--theme-card-filter,none)}
  .vp dl{display:grid;grid-template-columns:auto 1fr;gap:12px}.vp dd{margin:0;overflow-wrap:anywhere}.vp dt{color:var(--text-secondary)}.vp pre{white-space:pre-wrap;overflow-wrap:anywhere;max-height:300px;overflow:auto;font-size:12px;line-height:1.6}.vp [hidden]{display:none!important}.vp output{display:block;overflow-wrap:anywhere}.vp .state{color:var(--accent-primary)}@media(max-width:600px){.vp{padding:14px}.vp dl{grid-template-columns:1fr;gap:7px}.vp button{flex:1}.vp select{width:100%}}`;
  root.append(style);
  const main = document.createElement("main");
  main.className = "vp";
  root.append(main);
  const el = (tag, text, cls) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  };
  main.append(el("h1", t.title), el("p", t.description));
  const error = el("p", "", "error");
  error.setAttribute("role", "alert");
  main.append(error);
  const state = el("output", t.loading, "state");
  state.setAttribute("aria-live", "polite");
  main.append(state);
  const toolbar = el("div", "", "toolbar"),
    select = el("select");
  select.setAttribute("aria-label", t.title);
  toolbar.append(select);
  main.append(toolbar);
  const buttons = {};
  for (const name of [
    "refresh",
    "prepare",
    "install",
    "start",
    "stop",
    "cancel",
    "adopt",
  ]) {
    const b = el("button", t[name], name === "start" ? "primary" : "");
    b.type = "button";
    b.onclick = () => act(name);
    buttons[name] = b;
    toolbar.append(b);
  }
  const links = el("div", "", "toolbar"),
    anchor = el("a", t.open);
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  links.append(anchor);
  const copy = el("button", t.copy);
  copy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(anchor.href);
      ctx.ui.notify(t.copied, "success");
    } catch {
      error.textContent = t.copyFailed;
    }
  };
  links.append(copy);
  main.append(links, el("p", t.remote));
  const url = el("output");
  main.append(url);
  const detail = el("section", "", "panel"),
    dl = el("dl");
  detail.append(dl);
  main.append(detail);
  const fields = {};
  for (const name of ["source", "home", "backups", "last"]) {
    dl.append(el("dt", t[name]));
    fields[name] = el("dd");
    dl.append(fields[name]);
  }
  const logs = {};
  for (const name of ["actionLog", "devLog"]) {
    const section = el("section", "", "panel");
    section.append(el("h2", t[name]));
    logs[name] = el("pre");
    logs[name].setAttribute("aria-label", t[name]);
    section.append(logs[name]);
    main.append(section);
  }
  function render() {
    if (!status) return;
    state.textContent = [
      status.running ? t.running : status.has_package ? t.ready : t.missing,
      status.installed ? t.installed : t.notInstalled,
      status.active_action || t.idle,
    ].join(" · ");
    fields.source.textContent = status.preview_dir;
    fields.home.textContent = status.webui_home;
    fields.backups.textContent = status.backups.join("\n") || "—";
    fields.last.textContent = status.last_action
      ? `${status.last_action}: ${status.last_action_message}`
      : "—";
    logs.actionLog.textContent = status.action_log;
    logs.devLog.textContent = status.dev_log;
    const preview = new URL(status.frontend_url);
    if (
      ["localhost", "127.0.0.1"].includes(preview.hostname) &&
      !ctx.config.frontendOrigin
    )
      preview.hostname = location.hostname;
    anchor.href = preview.href;
    url.textContent = preview.href;
    anchor.hidden = !status.running;
    copy.disabled = !status.running;
    buttons.cancel.hidden = !status.active_action;
    buttons.stop.disabled = busy || (!status.running && !status.active_action);
    for (const name of ["prepare", "install", "start", "adopt"])
      buttons[name].disabled =
        busy ||
        Boolean(status.active_action) ||
        status.recursive_blocked ||
        (["prepare", "start"].includes(name) && !select.value) ||
        (["install", "start"].includes(name) && !status.has_package);
    select.disabled =
      busy || Boolean(status.active_action) || status.recursive_blocked;
    if (status.recursive_blocked) error.textContent = t.recursive;
    if (
      status.last_action_completed_at &&
      seen &&
      seen !== status.last_action_completed_at
    )
      ctx.ui.notify(
        status.last_action_message || t.failed,
        status.last_action_success ? "success" : "error",
      );
    seen = status.last_action_completed_at || seen;
  }
  async function refresh(tags = false) {
    const s = await ctx.rpc.call("status");
    if (stopped) return;
    status = s;
    render();
    if (tags) {
      const result = await ctx.rpc.call("tags");
      if (stopped) return;
      const selected = select.value || s.current_tag;
      select.replaceChildren(
        ...result.tags.map((tag) => {
          const option = el("option", tag.name);
          option.value = tag.name;
          return option;
        }),
      );
      if ([...select.options].some((x) => x.value === selected))
        select.value = selected;
      render();
    }
  }
  async function act(name) {
    if (busy) return;
    busy = true;
    error.textContent = "";
    render();
    try {
      if (name === "refresh") await refresh(true);
      else {
        if (name === "adopt" && !(await ctx.ui.confirm(t.adoptConfirm))) return;
        await ctx.rpc.call(
          name,
          ["prepare", "start"].includes(name)
            ? { tag: select.value }
            : name === "adopt"
              ? { confirm: true }
              : null,
        );
        ctx.ui.notify(
          ["stop", "cancel"].includes(name) ? t.stopped : t.accepted,
          "success",
        );
        await refresh();
      }
    } catch (e) {
      error.textContent = e.message || String(e);
    } finally {
      busy = false;
      render();
    }
  }
  async function poll() {
    try {
      await refresh();
    } catch (e) {
      if (!stopped) error.textContent = e.message || String(e);
    } finally {
      if (!stopped)
        timer = setTimeout(poll, status?.active_action ? 1000 : 3000);
    }
  }
  const dispose = () => {
    stopped = true;
    clearTimeout(timer);
    main.remove();
    style.remove();
  };
  ctx.lifecycle.add(dispose);
  try {
    await refresh(true);
  } catch (e) {
    error.textContent = e.message || String(e);
  } finally {
    loading = false;
    if (!stopped) timer = setTimeout(poll, 1000);
  }
  return dispose;
}
