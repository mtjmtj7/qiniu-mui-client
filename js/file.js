mui.plusReady(function() {
	//读取server
	var server = localStorage.getItem("server")
	//展示文件列表
	mui.showLoading("正在查询中", "div")
	var bucket = 'mtjmtj7'
	mui.ajax(server+'/getBucketFileList',{
		data:{
			bucket: bucket
		},
		type:'post',//HTTP请求类型
		success:function(data){
			mui.hideLoading()
			var ul_dom = document.getElementById(bucket+"_ul")
			var str=''
			for (var i = 0; i < data.length-1; i++)
			{
				var img = ''
				if(data[i].mimeType == 'pdf') img = '<img class="imgg" src="img/pdf.jpg">'
				else if(data[i].mimeType == 'text') img = '<img class="imgg" src="img/txt.jpg">'
				else if(data[i].mimeType == 'video') img = '<img class="imgg" src="img/video.jpg">'
				else if(data[i].mimeType == 'application') img = '<img class="imgg" src="img/application.jpg">'
				else img = '<img class="imgg" src="http://media.mtjmtj7.cn/'+data[i].key+'">'
				str +='<li class="mui-table-view-cell" data="'+data[i].key+'">'+img+'<span>'+data[i].key+'</span></li>'
			}
			ul_dom.innerHTML=str
			
			//点击查看详情
			mui("#mtjmtj7_ul").on('tap','li',function(){
				var key = this.getAttribute("data")
				var bucket_name = 'mtjmtj7'
				 mui.openWindow({
					url: 'file.html', 
					id:'tab-file',	//本页面ID
					extras:{
						filename: key,
						bucket_name: bucket_name
					}
					
				  });
			})
			//长按复制链接
			mui(".ul_panel").on('longtap','li',function(e){
				var key = this.getAttribute("data")
				var bucket_name = this.parentNode.id.split("_")[0]
				
				var txt = "http://media.mtjmtj7.cn/"+key
				setCopyText(txt)
				plus.nativeUI.toast("链接已复制到剪切板")
			})
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			mui.hideLoading()
		}
	})
		
})