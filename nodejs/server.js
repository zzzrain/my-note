// 内置模块
var url = require('url');
var http = require('http');
var querystring = require('querystring');

// 第三方模块（需要安装）
var mysql = require('mysql');

// 连接数据库
var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: '1612',
})
connect.connect();

console.log('开启服务器')
http.createServer(function(request, response) {
	// 设置请求头解决跨域
	response.setHeader('Access-Control-Allow-Origin', '*');

	//console.log(request.url)
	
	// 提取路径信息并转成对象
	var paramsStr = url.parse(request.url).query
	var params = querystring.parse(paramsStr)
	//console.log(params)
	
	// 提取路径名字
	var pathname = url.parse(request.url).pathname;
	//console.log(pathname);

	// 模拟输出
	/*var obj = {
			name: 'Bourne',
			age: 30
		}
	response.end(JSON.stringify(obj))*/

	switch (pathname) {
		case "/add":
			connect.query("insert into news (title,content) values ('" + params.title + "','" + params.content + "')", function(err, data) {
				if (err) {
					throw err
				} else {
					connect.query("select * from news", function(err, data) {
						if (err) {
							throw err
						} else {
							//data => array
							console.log(data)
							var news = {};
							news.text = data;
							response.end(JSON.stringify(news));
						}
					})
				}
			})
			break;
		case "/select":
			connect.query("select * from news", function(err, data) {
				if (err) {
					throw err
				} else {
					var news = {};
					news.text = data;
					response.end(JSON.stringify(news));
				}
			})
			break;
		case "/delete":
			connect.query("delete from news where id = " + params.id, function(err, data) {
				if (err) {
					throw err
				} else {
					connect.query("select * from news", function(err, data) {
						if (err) {
							throw err
						} else {
							var news = {};
							news.text = data;
							response.end(JSON.stringify(news));
						}
					})
				}
			})
			break;
		case "/edit":
			connect.query("select * from news where id = " + params.id, function(err, data) {
				if (err) {
					throw err
				} else {
					var news = {};
					news.text = data;
					response.end(JSON.stringify(news));
				}
			})
			break;
		case "/update":
			connect.query("update news set content='" + params.content + "',title='" + params.title + "' where id =" + params.id, function(err, data) {
				if (err) {
					throw err
				} else {
					var news = {};
					news.text = data;
					response.end(JSON.stringify(news));
				}
			})
			break;
	}

}).listen(10086)