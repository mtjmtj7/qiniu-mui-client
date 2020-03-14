
var server = localStorage.getItem("server")
mui.plusReady(function() {
	//获取空间列表
	mui.ajax(server+'/getAllBuckets',{
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:function(data){
			var buckets = document.getElementById("buckets")
			//遍历data数组
			var str = ''
			for (var i = 0; i < data.length; i++) {
				str +='<li class="mui-table-view-cell">'+data[i]+'<span class="mui-badge mui-badge-inverted" id="'+data[i]+'"></span></li>'
			}
			buckets.innerHTML = str
			
			//
			//获取文件数、空间大小
			var ull = document.getElementById("buckets")
			var spans = ull.getElementsByTagName("span")
			for (var i = 0; i < spans.length; i++) {
				setTimeout(bucket_size(spans[i].id), 5000)
				
			}
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			plus.nativeUI.toast("服务未开启。")
		}
	})
	
	
	
	
})

function bucket_size(bucket_name){
	mui.ajax(server+'/getBucketFileList',{
		data:{
			bucket: bucket_name
		},
		type:'post',//HTTP请求类型
		success:function(data){
			var size = data[data.length-1].fsize
			//换算大小
			var s = "共"+(data.length-1)+"个文件/"
			s+=translate_size(size)
			inner(bucket_name, s)
		}
	})
}