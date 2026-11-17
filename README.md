# Independent Studio Version Preview

私有开发插件 0.1.0，独立提供前端控制页、RPC、源码下载、依赖安装、运行监督、日志与持久化。插件不导入、复制或调用 Studio 内置版本预览实现；也不调用其六个业务 API。

宿主内置页面、路由和执行器仍保留。使用插件时，公开资源租约负责防止两套控制器同时操作同一资源，未来移除内置模块只需让宿主继续提供同名资源描述。

## 使用与开发

需要本任务宿主分支提供的两个公开接口：服务端 `ctx.environment` 安装信息，以及 `ctx.resources.claim('studio.version-preview')` 独占租约。旧宿主会明确拒绝加载。插件 ID `version-preview`，页面 `/studio/plugins/version-preview/preview`；可在导航设置启用“版本预览插件”。

```sh
npm ci --include=dev --ignore-scripts
npm run build
npm run harness:check
npm test
npm run test:e2e
```

在含上述接口的 Studio 插件中心，从本地插件绝对路径安装并启用；开发可使用同一宿主的 `ekko-studio plugins link <absolute-directory>`。运行时不需要插件的开发依赖；只依赖 Node 标准库和自身的 `tar` 包，启动的目标 Studio 源码会自行安装其开发依赖。

私有 GitHub 安装还要求运行宿主的 npm/Git 有仓库读取权限；插件不收集或保存 GitHub token。未发布 npm 包、GitHub Release，未自动安装到真实用户环境。预览 RPC 和租约没有管理员角色校验；Studio 原有可信插件安装管理规则保持原状。

## 功能与运行方式

- main + 最近八个版本 tag，Git 远端查询及 GitHub API 回退，缓存五分钟。
- Git 浅克隆，失败使用 GitHub 归档；先下载校验再切换，保留完整旧源码备份。
- `npm install --include=dev --ignore-scripts` 后 `npm rebuild node-pty`，验证 Vite、ts-node、TypeScript 及 node-pty 实际加载。
- 自己的 Node supervisor 直接启动后端入口和 Vite，**不执行目标源码的 npm run dev、不读取 nodemon.json、不修改源码的配置文件**。前端使用 Vite 公共 API 加载应用配置、覆盖代理及端口；独立 AST 转换适配历史直接 WebSocket 端口，HTML 注入避免预览误用已保存的正式服务器地址。
- 前后端 HTTP 均响应且状态低于 500 才报告启动成功。停止/取消等待下载、安装、就绪任务和进程树清理。RPC 返回 accepted 后应轮询到作业完成。
- 中英文界面、窄屏布局、运行状态、错误与有界日志；打开/复制预览地址，远程部署可配置 frontendOrigin。
- PID、系统创建时间、进程组与作业记录持久化；插件停用、重载、卸载、宿主退出均等待清理。崩溃后未完作业标记 interrupted。

## 旧数据与接管

资源租约提供旧源码目录与 Web UI 数据目录，继续使用历史拼写 `hermes-web-ui-pereview` 和 `hermes-web-ui-pereview-home`。账号、数据库、上传等不迁移、不重置、不自动删除。每次重新准备源码都将原目录重命名为 `hermes-web-ui-pereview.backup-<uuid>`；保留用户修改及旧依赖。备份会占空间，插件不自动清除。

内置有任务或受控进程时，启用插件会被拒绝；须先在内置页面停止或等待原任务。租约存续时内置写操作返回 409，宿主原内置关闭 hook 跳过插件资源；插件结束并成功清理后释放。清理失败时保留租约并报错，防止错误交接。宿主没有把预览下载或运行逻辑扩展到租约接口。

Unix/macOS 的“接管旧预览”经用户在页面确认后，核实监听进程 cwd、独立 npm/concurrently 进程组及创建时间，再停止旧进程、复用原数据。未知端口占用者或无法确认归属时拒绝，不按端口直接杀进程。Windows 无旧归属记录的进程需先在原宿主停止；旧数据仍原位复用。插件自身的 Windows 进程使用创建时间核验与 taskkill 树清理。

状态和新日志放在 `ctx.paths.dataDir`，源码中的历史日志继续保留。响应只读取日志末尾 24000 字节。runner.json v1 与所有 RPC 使用 `contracts/plugin.json` 声明校验；未知状态版本或不明所有权锁拒绝覆盖。

## 环境与适用边界

默认后端/前端/TCP bridge/worker base 为 8650/8651/18650/19650；支持插件配置仓库、Node/npm-cli 绝对路径、端口、bridge 传输及 frontendOrigin。兼容预览专用仓库、bridge 环境覆盖。Node/npm 以参数数组启动，不拼接 npm.cmd shell。依赖安装和原生构建仍需网络及系统工具。

子进程环境只保留系统、语言、代理、证书与 npm registry，再显式设置预览 home、uploads、端口、bridge 和开发标记。宿主 AUTH_TOKEN、UPLOAD_DIR、PORT、Node 调试参数不继承。为保护正式 Agent 状态，新启动实例将 `HERMES_HOME` 设为预览数据目录内的 `hermes-agent`；不会复制正式 Agent 数据，旧共享 Agent 配置需在预览环境另行配置。预览仍是执行可信源码的本机进程，不是容器沙箱。

前端监听 0.0.0.0；浏览器默认将 localhost 替换为 Studio 页面主机。端口开放、反向代理与 TLS 由部署侧配置。后端预览标记阻止本插件递归启动；不删除或重写被预览版本的内置功能。

只支持 GitHub 源码。私有源码 Git 鉴权使用本机 Git；没有 token 归档回退。归档拒绝链接、特殊文件和越界路径；含这类文件的源码会安全失败。归档来源 commit 暂为空。前后端就绪不等于 Agent 聊天或全部 bridge worker 都已验收。后端无 nodemon 文件监听；前端保留 Vite 热更新。未验证所有历史版本、Windows/Linux 或桌面 Electron 的实际运行。

维护的测试覆盖真实 Node/Vite/ts-node 测试服务、取消/重载/孙进程清理、备份、接管与 UI；本次另外在隔离数据目录准备了真实 main 和 v1.0.9，并对两者完成依赖安装、启动和停止；main 页面还通过真实浏览器渲染检查。详细证据由任务报告提供，不打包进插件。
