/**
 * toast提示
 * @param {Object} msg
 */
function toast(msg)
{
	plus.nativeUI.toast(msg,{
		duration:"short",
	})
}

/**
 * 控制台日志
 * @param {Object} msg
 */
function log(msg)
{
	console.log(msg)
}

/**
 * 复制文字到剪切板
 * @param {Object} txt
 */
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

/**
 * innerHtml
 * @param {Object} id
 * @param {Object} str
 */
function inner(id, str)
{
	document.getElementById(id).innerHTML=str
}

function translate_size(size)
{
	if(parseInt(size/1024) == 0 ){
		//B
		return size+"B"
	}
	else if(parseInt(size/1024/1024) == 0 ){
		//KB
		return (size/1024).toFixed(2)+"KB"
	}
	else if(parseInt(size/1024/1024/1024) == 0 ){
		//MB
		return (size/1024/1024).toFixed(2)+"MB"
	}
	else{
		//GB
		return (size/1024/1024/1024).toFixed(2)+"GB"
	}
}
