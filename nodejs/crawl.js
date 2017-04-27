var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var cheerio = require('cheerio');

/*var connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'1612',
})
connect.connect();*/

function crawl(url,callback){
	http.get(url, function(res) {
		var str = "";
		res.on('data', function(data) {
			str += data;
		});
		res.on('end', function() {
			callback(str)
		});
	})
}

//http://mp.weixin.qq.com/s/JJ_bNJJWcQ9ltfWmFktbSw
//http://www.mmjpg.com/tag/liufeier

crawl("http://mp.weixin.qq.com/s/JJ_bNJJWcQ9ltfWmFktbSw", function(data) {
	// 储存数据
	var imgArr = [];
	
	//把html结构交给服务端的jq去处理
	var $ = cheerio.load(data);
	
	// 遍历数据
	$("img").each(function(index, ele) {
		//console.log(ele)
		//插入数据库
		//connect.query("insert into meitu (title,image) values ('" + $(ele).attr("alt") + "','" + $(ele).attr("src") + "')")
		imgArr.push($(ele).attr("src"))
	})
	download(imgArr)
})

// 下载数据（递归）
var i = 1;
function download(imgArr) {
	//console.log(imgArr)
	if(i<10){
		var writerStream = fs.createWriteStream('./0425/' +'0'+ i + '.jpg');
	}else{
		var writerStream = fs.createWriteStream('./0425/' + i + '.jpg');
	}
	
	http.get(imgArr[i], function(res) {
		res.pipe(writerStream)
		if(i < imgArr.length) {
			i++;
			download(imgArr)
		} else {
			return;
		}
	})
}
