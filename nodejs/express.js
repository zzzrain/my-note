// 第三方模块
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: '1612',
})
connect.connect();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//app.set("views",'./views');
//app.set("viwe engine","jade");

app.get('/',function(req,res){
	res.send('welcome')
})
app.get('/add',function(req,res){
	res.send('增加信息')
	console.log(req.query)
})

app.post('/add',function(req,res){
	res.append('Access-Control-Allow-Origin', '*');
	console.log(req.body)
	connect.query("insert into news (title,content) values ('" + req.body.title + "','" + req.body.content + "')")
})

app.listen(10000)
