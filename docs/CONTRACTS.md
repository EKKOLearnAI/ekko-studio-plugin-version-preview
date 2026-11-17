# 版本预览合同

唯一结构来源是 `contracts/plugin.json`。RPC 注册及结果均用 registerRpc 校验，runner.json 用 state 模型在读取与写入时验证。无参数传 null，start 传 {} 或 {tag}，prepare 必须 {tag}，adopt 必须 {confirm:true}。

status/tags 是读取；prepare/install/start/adopt 返回 accepted 快照。必须轮询 active_action 和 last_action_completed_at；accepted 不代表成功。所有写操作共享单实例锁，不按用户/Profile 创建多个预览。后台工作只持有 apply 时的 plugin signal，不使用已结束 RPC 的 run context。

stop/cancel 取消下载、Git、npm 安装、原生构建、就绪等待，等待退出并停止已有预览。插件关闭执行同一清理；无法确认进程归属时保留记录并报错，不能伪报成功。作业失败、取消、宿主意外退出分别以 preview_failed/cancelled/interrupted 返回。

插件仅通过 ctx.environment、ctx.paths、ctx.resources、RPC 与 lifecycle 集成，不调用内置预览 API。公开租约的 data 使用 lease 模型校验，原子锁读写使用 owner 模型校验。

源码、预览数据、runner 状态以及旧源码备份的路径含义见 README。state 版本 1 中不存在可选 active/last/process 表示无记录；未知版本拒绝读取并保留文件。锁是独立原子文件，不属于 SDK KV store；含当前宿主 pid/fingerprint/token，仅所有者可释放，活动或不确定归属时不会覆盖。

新增配置不是任意文件选择器：固定兼容数据路径来自服务端 environment；插件页面无法提交路径、进程 PID 或 shell 命令。配置按宿主 schema 约束，运行时另验证端口、GitHub URL 和 bridge 地址。没有新增管理员校验。
