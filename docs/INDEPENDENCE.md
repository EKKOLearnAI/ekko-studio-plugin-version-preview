# 独立性与宿主边界

插件界面由 src/client 维护，迁移内置版本预览组件的布局、文案、按钮状态和通知逻辑，Vue/Naive UI 由插件构建为单文件 client.mjs。界面一致不要求运行时导入宿主源码；移除宿主内置页面不会破坏插件客户端。

server.mjs 和 src 顶层运行模块拥有全部预览业务。运行时依赖只有 Node 标准库、自身的 tar 和随包 SDK 契约校验器。没有导入 Studio checkout/dist/安装目录的业务代码，不调用内置 preview API，也不申请 studio.version-preview 租约。

必要宿主接口仅有 paths.dataDir、extensions.rpc 与 lifecycle。config 提供可选高级覆盖；environment 只作可选的仓库信息与预览标记来源。插件自行决定目录、端口、进程和各宿主实例的资源隔离。清单仅需要 ui 权限。

被预览 Studio 的一般后端入口、Vite 配置和开发工具是运行目标；插件 supervisor 独立启动它们，不调用其预览管理器、npm run dev 或 nodemon 配置。配置适配不写回目标源码。

scripts/check-independence.mjs 检查实际分发运行模块的静态导入：相对导入不得逃出插件，服务端外部依赖只允许 Node/tar；客户端组件及依赖已内联。静态检查不能代替实际的旧 SDK、数据保留、多实例和页面测试。
