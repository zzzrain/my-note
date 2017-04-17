
/*全局对象*/
function global(){
	return this;
}

/*位数随机*/
function count(n){
	var m = 1;
	for(var i=0; i<n; i++){
		m *= 10;
	}
	return parseInt(Math.random()*m);
}

/*范围随机*/
function scope(a,b){
	var x = a>b ?a :b;
	var y = a>b ?b :a;
	return parseInt(Math.random()*(x-y+1))+y;
}

/*颜色随机*/
/*function color(){
	var res = 'rgba(' + scope(0,255) +','+ scope(0,255) +','+ scope(0,255) + ')';
	return res;
}*/
function color(){
	var str = '0123456789abcdef';
	var res = '#';
	for(var i=0;i<6;i++){
		var idx = parseInt(Math.random()*16);
		res += str[idx];
	}
	return res;
}


/*任意求和*/
/*function sum(){
	var res = 0;
	for(var i=0;i<arguments.length;i++){
		res +=arguments[i];
	}
	return res;
}*/
function sum(arr){
	var res = 0;
	for(var i=0;i<arr.length;i++){
		res +=arr[i];
	}
	return res;
}

/*冒泡排序*/
/*function sort(){
	for(var i=0; i<arguments.length-1;i++){
		for(var j=0;j<arguments.length-1-i;j++){
			if(arguments[i]>arguments[i+1]){
				var tmp = arguments[i];
				arguments[i] = arguments[i+1];
				arguments[i+1] = tmp;
			}
		}
	}
	return arguments;
}*/
function sort(arr){
	for(var i=0; i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[i]>arr[i+1]){
				var tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
			}
		}
	}
	return arr;
}

/*编写一个函数，计算任意两个数字之间所能组成的奇数个，数字必须是个位数
比如： 计算0-3之间能组成的奇数个是01、21、03、13、23、31*/
function odd(x,y){
	var a = x<y ?x :y;
	var b = x<y ?y :x;
	//0、1、2、3 			
	var val = '';
	for(var i=a; i<=b; i++){
		for(var j=a; j<=b; j++){
			if(i != j){
				var res = i*10 + j;
				//console.log(res)
				if(res%2 != 0){
					val += res + ',';			
				}	
			}		
		}
	}
	return val.slice(0,-1);		
}

/*监听兼容*/
function addEvent(ele,type,handle,capture){
	if(ele.addEventListener){
		ele.addEventListener(type,handle,capture)
	}else if(ele.attachEvent){
		ele.attachEvent('on'+ type,handle)
	}else{
		ele['on'+ type] = handle;
	}
}

/*获取样式*/
function getStyle(ele,css){
	return getComputedStyle(ele)[css];
}

/*cookie的增删改查
 * @param name    [cookie名]
 * @param val     [cookie值]
 * @param expires [有效期]
 * @param path    [cookie保存的路径]
 */
function setCookie(name,val,expires,path){
	var cookieStr = name + '=' + val;

	if(expires){
		cookieStr += ';expires=' + expires;
	}

	if(path){
		cookieStr += ';path=' + path;
	}

	// 写入cookie
	document.cookie = cookieStr;//'name=laoxie'
}
//setCookie('name','laoxie',expires,path)
//setCookie('carlist',[{}])

function getCookie(name){
	var cookie = document.cookie.split('; ');
	var res;

	for(var i=0;i<cookie.length;i++){
		var arr = cookie[i].split('=');
		if(arr[0] === name){
			res = arr[1];
			break;
		}
	}

	return res;
}

function removeCookie(name){
	var now = new Date();
	now.setDate(now.getDate()-1);
	// document.cookie = name + '=null;expires='+ now
	setCookie(name,'null',now);
}

/* 运动函数
 * @param  ele   [执行动画的元素节点]
 * @param  opt   [执行动画的属性和目标值]
 * @param  callback [回调函数]
 */
function animate(ele,opt,callback){
	// 设置一个属性timerLen，用于记录属性动画的数量
	ele.timerLen = 0;
	
	// 遍历对象，找出每一个属性和对应的目标值
	for(let attr in opt){
		ele.timerLen++;

		// 目标值
		let target = opt[attr];
		let timerName = attr+'timer';

		// 开启定时器前，先清除之前的定时器
		clearInterval(ele[timerName]);
		ele[timerName] = setInterval(()=>{
			// 获取当前值
			var current = getStyle(ele,attr);

			// 提取单位
			var unit = current.match(/[a-z]+$/i);//['px']/null
			unit = unit ? unit[0] : '';

			current = parseFloat(current);

			// 计算缓动速度
			var speed = (target - current)/8;//0.003

			// 取整（整数/负数）
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);//0.1=>1,-0.1=>-1

			// 如果是opacity
			if(attr == 'opacity'){
				speed = speed>0 ? 0.05 : -0.05;
			}

			// 当达到目标值时，清除定时器
			if(current == target){
				clearInterval(ele[timerName]);
				current = target - speed;

				// 清除后更新timerLen的数量
				ele.timerLen--;

				// 在所有动画完成后才执行callback()
				// 判断是否是最后一个属性动画执行完毕
				if(ele.timerLen === 0){
					typeof callback === 'function' && callback();
				}
			}

			// 修改DOM节点的属性
			ele.style[attr] = current + speed + unit;

		},30);
	}	
}

function ajax(opt){
	// 默认值
	var defaults = {
		type:'get',
		async:true
	}

	// 覆盖默认值
	for(var attr in opt){
		defaults[attr] = opt[attr];
	}
	opt = defaults;

	// 数据处理
	if(opt.data){
		// 判断是否需要加上?
		if(opt.url.indexOf('?') == -1){
			opt.url += '?';
		}else{
			opt.url += '&';
		}

		for(var key in opt.data){
			opt.url += key + '=' + opt.data[key] + '&';
		}
		opt.url = opt.url.slice(0,-1);
	}
	
	// jsonp处理
	if(opt.type === 'jsonp'){

		var script = document.createElement('script');

		var fn = 'getData' + parseInt(Math.random()*100000000000);
		window[fn] = function(data){
			opt.callback(data);

			// 移出script标签
			document.head.removeChild(script);

			// 删除全局函数
			delete window[fn];
		}

		// 判断url中是否已经有?
		if(opt.url.indexOf('?') == -1){
			opt.url += '?callback=getData';
		}else{
			opt.url += '&callback=getData';
		}
		script.src = opt.url;

		document.head.appendChild(script);//getData({xxxx})

		return;
	}
		
	// ajax请求
	var xhr;

	// 处理兼容性
	try{
		// 尝试执行这里的代码
		xhr = new XMLHttpRequest();
	}catch(error){
		try{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(error){
			try{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(error){
				alert('666');
			}
		}
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
			var res;
			try{
				if(JSON.parse){
					res = JSON.parse(xhr.responseText);
				}else{
					res = eval('('+ xhr.responseText +')');
				}
			}catch(err){
				res = xhr.responseText;
			}

			/*if(typeof opt.callback === 'function'){
				opt.callback(res);
			}*/

			typeof opt.callback === 'function' && opt.callback(res);
		}
	}			
	xhr.open(opt.type,opt.url,opt.async);
	xhr.send();
}