### 七牛云手机端WebApp开发日志

#### 使用说明

##### 设置页面

- 进入APP检查服务器是否可用。
- 对输入的服务器地址检查，可用后更新
- 单击当前服务器地址复制地址方便修改

##### 文件列表

- 默认了bucket...
- 双击列表直接复制外链地址
- 单击进入文件详情，双击任意文件信息复制外链地址

##### 上传

- 显示空间大小



#### 开发日志

##### 2020年3月12日10:32:43

- 新增了文件列表的文件预览图，图片直接显示，非图片显示默认的预览图
- 新增了文件详情页的图片显示

##### 2020年3月12日20:16:28

- 新增了动态服务器配置
- 修改了文件列表（默认了bucket...
- 新增了加载等待遮罩

##### 2020年3月13日15:03:23
- 新增了下载进度条.
##### 2020年3月14日16:05:01
- 修复了下载进度显示
- 支持断点续传，打开详情自动下载
- 新增了下载页
##### 2020年3月14日20:50:22

- 优化了文件详情显示

##### 2020年3月15日11:43:59

- 任务的下载、暂停、取消。

##### 2020年3月17日11:25:28

- 多任务下载的下载、暂停

#### 已知问题

- ~~打开服务器不可用后，文件列表遮罩一直等待。---2020年3月12日20:31:08~~
- ~~下载中的任务退出后没法再次查看进度 --2020年3月13日18:10:19~~
- ~~在下载未完成时新的下载会覆盖上一个 --2020年3月13日18:10:24~~
- 下载页打开无法自动显示下载列表，刷新后显示  --2020年3月14日16:50:54
- ~~查看详情待优化~(减少一次查询) --2020年3月14日20:50:47~~~
- ~~多文件查看下载进度，来回切换蜜汁bug... --2020年3月14日20:51:34(网络问题![](http://media.mtjmtj7.cn/images/e247.png))~~
- 服务器失效后，保存新的可用服务器数据不刷新  --2020年3月15日11:16:32
- ~~H5+ downloader能多任务下载？？？ --2020年3月15日11:42:27（操作失误<img src="http://media.mtjmtj7.cn/images/kuanghan.png" style="zoom:50%;" />...~~
- ~~任务暂停后状态还是3？？？ （科普：http://www.html5plus.org/doc/zh_cn/downloader.html#plus.downloader.DownloadState  --2020年3月15日11:43:45~~
- 淦 下载列表不搞了
