mui.plusReady(function() {
	//读取server
	var server = localStorage.getItem("server")
	//展示文件列表
	mui.ajax(server+'/getAllBuckets',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},
			success:function(data){
				var content = document.getElementById("content")
				//遍历data数组
				var str = ''
				for (var i = 0; i < data.length; i++) {
					str+='<ul class="mui-table-view"><li class="mui-table-view-cell mui-collapse"><a class="mui-navigate-right" href="#">'+data[i]+'</a><div class="mui-collapse-content"><ul class="mui-table-view ul_panel" id="'+data[i]+'_ul"></ul></div></li></ul>'
				}
				content.innerHTML = str			
				//)
				var as = document.getElementsByTagName('a')
				for(var i=0; i<as.length; i++)
				{
					as[i].index = as[i].text;
				}
				mui('#content').on("tap","a",function(){
					var bucket = this.index
					mui.ajax(server+'/getBucketFileList',{
						data:{
							bucket: bucket
						},
						type:'post',//HTTP请求类型
						success:function(data){
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
							mui(".ul_panel").on('tap','li',function(){
								var key = this.getAttribute("data")
								var bucket_name = this.parentNode.id.split("_")[0]
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
							
							function setCopyText(txt) {
								if(!window.plus) return;//判断当前环境是否为手机
								if(mui.os.android) {//当前手机系统为android
									var Context = plus.android.importClass("android.content.Context");//导入Java类对象
									var main = plus.android.runtimeMainActivity();//获取应用主Activity(界面载体，原生应用是由很多个Activity所构成，而混合APP则是只有一个Activity 通过webview来实现app内容)实例对象
									var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
								    plus.android.invoke(clip,"setText",txt);
								} else {//ios系统
									var UIPasteboard  = plus.ios.importClass("UIPasteboard");//导入Objective-C类对象
									var generalPasteboard = UIPasteboard.generalPasteboard();//获得ios粘贴板
									generalPasteboard.setValueforPasteboardType(txt,"public.utf8-plain-text");//往粘贴板中写入数据
								}
							}
							mui(".ul_panel").on('doubletap','li',function(e){
								var key = this.getAttribute("data")
								var bucket_name = this.parentNode.id.split("_")[0]
								
								var txt = "http://media.mtjmtj7.cn/"+key
								setCopyText(txt)
								plus.nativeUI.toast("链接已复制到剪切板")
							})
						}
					})
				})
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				plus.nativeUI.toast("服务未开启。")
			}
		})	
		
		
		
})