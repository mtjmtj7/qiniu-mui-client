var dtask = null;
// 监听下载任务状态 
function onStateChanged(dtask, status) {
	if(!dtask) return;
	switch(dtask.state){
		case 1:
			toast("正在准备")
			break;
		case 2:
			toast("开始下载任务")
			break;
		case 3:
			log("正在下载")
			var p = (dtask.downloadedSize/dtask.totalSize*100).toFixed(2)
			break;
		case 4:
			toast("下载完成")
			break;
	}
}
// 创建下载任务
function createDownload(url) {
	dtask = plus.downloader.createDownload(url);
	return dtask;
}
// 暂停下载任务 
function pauseDownload(dtask) {
	dtask.pause();
}
// 取消下载任务 
function abortDownload(dtask) {
	dtask.abort();
}
// 取消所有下载
function abortAllDownload(){
	plus.downloader.enumerate(function(tasks){
		for (var i = 0; i < tasks.length; i++) {
			abortDownload(tasks[i])
		}
	})
}