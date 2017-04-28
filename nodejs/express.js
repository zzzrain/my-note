// 第三方模块
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// 连接数据库
var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: '1612',
})
connect.connect();

// 实例化exp
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
	res.send('welcome')
})
app.get('/add',function(req,res){
	res.send('增加信息')
})

app.post('/add',function(req,res){
	// 插入请求头
	res.append('Access-Control-Allow-Origin', '*');
	
	console.log(req.body)
	connect.query("insert into news (title,content) values ('" + req.body.title + "','" + req.body.content + "')")
})

app.listen(10000)
