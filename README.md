# Studio Version Preview

独立版本预览插件。界面迁移自 Studio 内置 `GithubPreviewSettings.vue`，保留相同的版本选择、按钮顺序、启用条件、状态表和日志区域；Vue 与 Naive UI 打包在插件客户端内，不从宿主加载组件。

## 使用

在插件中心安装并启用，从设置侧栏打开“版本预览”：选择 main 或版本 tag，依次点击“准备代码”“安装依赖”“开启预览”。“停止”和“刷新”的行为及文案沿用内置界面。版本列表保留 main 和最近八个 Studio/Web UI 版本，读取 Tag 对应源码的根 package.json 校验包名及版本；Android/App Tag 不会因数字更大而混入。元数据按提交读取并缓存；网络或凭据需要时使用插件自己的 Git 浅缓存，不修改已准备的源码。后台作业完成后才提示成功；失败显示实际错误。运行路径、当前 Tag、仓库、依赖、运行状态、预览地址及两种日志均在原样式状态表中显示。

预览目录、端口和运行进程由插件管理。只要求公开的 `ctx.paths.dataDir`、RPC 和 lifecycle；无需 `ctx.environment`、`ctx.resources` 或主仓库 PR #3840。内置预览页面、API 与执行器均可由宿主独立移除，不影响插件。插件不会接管、重命名或删除内置预览的旧目录。

## 自动存储与端口

新预览默认放在插件数据目录的 preview/source 与 preview/home。桌面版与开发服务即使共用同一插件数据根，也会自动分配稳定的独立目录、日志、状态和 worker 端口段，不争抢另一实例的锁。实例分配记录放在 instances/.slots，重载和升级保留。

升级已有插件时，第一实例继续原位使用插件自有的 isolated-preview 目录及 runner.json，源码、数据库、上传和旧备份不搬动。这里兼容的是旧插件数据，不读取内置预览的历史路径。每次“准备代码”先下载校验、备份旧源码，再切换；预览数据保持原位，备份不自动删除。

所有端口配置默认 0，表示自动分配并避开占用，结果保存到运行状态；重载优先复用。旧插件填入的默认 8650/8651/18650/19650 与 8660/8661/18660/19660 自动转为自动模式，其余非零自定义值保留。默认使用 loopback TCP bridge，避免深层目录超过 Unix socket 路径限制。配置中的 repository、Node/npm 路径、固定端口、bridgeTransport 和 frontendOrigin 仅作为可选高级覆盖。

## 独立执行与清理

后端独立实现 Git 浅克隆、GitHub 归档回退、依赖安装、运行监督、取消和进程归属校验。直接运行目标后端入口与 Vite 公共 API，不执行目标的版本预览管理器，也不调用内置预览业务 API。

安装使用 npm install --include=dev --ignore-scripts，并 rebuild/加载 node-pty。前后端 HTTP 就绪后才报告启动完成。停用、重载、卸载和退出会等待作业取消及进程树清理。进程锁包含创建时间与随机标识；只释放本实例的锁，不按端口杀未知进程。

子进程只继承系统、语言、代理、证书与 npm registry 相关环境；预览 Web UI、Agent home、uploads 和端口单独设置，不使用正式 AUTH_TOKEN。macOS 桌面启动缺少代理环境时，Git/npm 使用系统启用的静态 HTTP/HTTPS 代理，显式代理环境优先，localhost 绕过代理；不修改宿主全局网络设置，不解析 PAC。

预览是执行可信源码的本机进程。公开支持 GitHub 源码；私有仓库使用本机 Git 的读取权限，不收集 GitHub token。外部网络、原生依赖构建工具、端口开放与远程 TLS 由运行环境提供。页面就绪验证不等于所有 Agent 和模型配置均已验证。

## 开发与验证

```sh
npm ci --include=dev --ignore-scripts
npm run build
npm run harness:check
npm test
npm run test:e2e
```

客户端维护源码在 src/client，build 生成单文件 client.mjs 及随包第三方许可。运行时只需要 Node 标准库与自身的 tar 依赖。数据边界和兼容规则见 docs/CONTRACTS.md，独立性说明见 docs/INDEPENDENCE.md。

## 许可证

本仓库的插件、随附 SDK、模板、工具和全部指南统一采用 [MIT](LICENSE)，包括
STUDIO_CTX.md、STUDIO_RETURNS.md 及其 sdk/docs 副本。指南正文和贡献者署名保留，
来源及外部依赖的许可说明见 [署名与第三方声明](THIRD_PARTY_NOTICES.md)。
此变更仅针对本插件仓库，不改变 Studio 主仓库整仓许可或外部 npm 依赖许可。
`package.json` 的 `private: true` 仅防止误发布 npm，不代表 GitHub 仓库私有。

插件头像使用官方 Ekko Studio Logo，设置侧栏沿用原内置版本预览的立方体线条图标（宿主命名图标 `package`），颜色跟随侧栏主题。名称、描述及入口标题通过 manifest.i18n 覆盖 Studio 的全部 12 种语言，内容跟随 ctx.locale；fallback 字符串保留给旧版宿主。0.2.1 的侧栏入口需要支持 `package` 图标的新版 Studio。旧插件 ID、preview 视图 ID 与插件数据目录均保持兼容。

语言清单与 SDK 的 PLUGIN_LOCALES 一致：en、zh、zh-TW、ja、ko、fr、es、de、pt、ru、ar、tr。预览操作、提示和状态字段均有对应翻译；Naive UI 控件跟随语言，阿拉伯语使用 RTL，路径和日志保留 LTR。
