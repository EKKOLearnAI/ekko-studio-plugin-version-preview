# 版本预览合同

唯一结构来源是 contracts/plugin.json。RPC 的输入与输出使用 registerRpc 校验；runner.json、实例分配和所有权锁在读取及写入时使用对应模型校验。

页面只显示与内置版相同的五个操作：prepare（准备代码）、install（安装依赖）、start（开启预览）、stop（停止）、tags/status（刷新）。无参数传 null；prepare 必须 {tag}；start 使用 {} 或 {tag}。cancel 保留为清理控制接口，不额外展示按钮。已删除旧的 adopt RPC、lease 模型和接管旧预览入口。

prepare/install/start 返回 accepted 快照，需观察 active_action 与 last_action_completed_at 确认最终结果，接受作业不能提示成功。按钮启用条件与内置页面一致：准备需要 tag；安装需要 has_package；开启需要 installed；停止需要 running；活动作业期间禁用四个操作。完成通知只显示新完成记录，包括首次作业，不重放挂载前结果。

插件始终使用自己管理的 isolated 存储模式，只依赖公开 paths.dataDir。可选 environment 只读取仓库元数据与预览标记，不使用其 Web UI 根目录，不申请资源租约。实例摘要由当前进程类型、工作目录与监听端口导出，不包含账号或认证信息。instanceSlot v1 在 instances/.slots 原子登记稳定实例，分别分配目录、状态和不重叠的千端口 worker 区段。

第一实例原位兼容旧插件 isolated-preview 及 runner.json；其他实例使用独立目录。不探测、接管或修改内置预览目录。源码、账号数据库、上传和备份均保留，升级不自动迁移或删除。state v1 新增可选 ports；未提供时自动分配，正常重载复用。未知版本或非法文件拒绝覆盖。

端口值 0 表示自动分配。旧插件各项默认端口转为 0，非默认高级覆盖保留。自动端口被占用时选择下一组，并在实际启动前检查；不停止未知占用进程。默认 bridge 为 loopback TCP；显式 IPC 仅接受可用长度的插件数据目录路径。

stop/cancel 会等待下载、安装、启动和受控进程树结束。插件关闭执行相同清理；失败保留归属证据并报错。作业失败、取消、意外退出分别为 preview_failed/cancelled/interrupted。所有后台作业只持有插件根 signal，不持有已结束 RPC 的调用上下文。

版本列表保留 main 和最多八个 Studio/Web UI Tag。Tag 必须匹配根 package.json 的 Studio 包名及版本（去掉 v）；同仓库中的 Android/App 发布不作为 Studio 版本。tagPackage 模型校验上游元数据；插件优先读取提交对应的公开源码元数据，代理环境可使用 curl；不可用或需要 Git 凭据时使用独立 Git 浅缓存，兼容 GitHub API 回退，刷新并发合并、结果缓存五分钟。无法验证时报告错误，不猜测版本类型。
