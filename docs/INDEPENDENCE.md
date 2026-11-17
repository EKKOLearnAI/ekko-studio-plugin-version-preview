# 独立性与宿主边界

插件的 client.mjs 是自包含浏览器模块，server.mjs 与 src/ 下模块独立拥有全部预览业务。运行依赖只有自身声明的 tar 和 Node 标准库；公共 SDK 的契约校验器作为项目文件随包携带。没有从 Studio checkout、dist 或安装目录导入业务代码，也不调用旧 preview API。

目标 Studio 仓库是“被预览应用”，其一般后端入口、Vite 应用配置和开发工具属于运行目标。插件的 supervisor 自行运行它们；不使用目标中的版本预览管理器、预览页面、npm run dev 或 nodemon 配置。Vite 配置适配和 WebSocket AST 变换是独立实现的插件代码，不写回目标配置。

必要宿主接口仅有：environment 提供安装元数据；paths.dataDir 提供稳定数据根；resources.claim 提供互斥租约及旧目录元数据；rpc 和 lifecycle 提供页面通信及退出清理。ui 只用于通知、确认和页面导航。权限声明 api.write 用于资源租约，ui 用于插件页。业务处理不检查管理员角色。

资源租约没有下载、安装、启动、停止能力；插件不向宿主内置模块委托业务。内置预览完整保留，仅添加租约存在时的互斥保护和元数据读取；未来删除内置实现不会要求改动插件业务，宿主继续注册同名资源即可。

`node scripts/check-independence.mjs <absolute-output.json>` 用 TypeScript 解析当前六个运行模块的静态 imports，验证相对导入不越出包、外部依赖只含 Node/tar，并检查禁用的内置预览耦合。静态检查不能替代代码审查；真实宿主安装测试将所有 host API 请求设为失败，仍能完成状态、重载、停止和卸载，作为运行时补充证据。
