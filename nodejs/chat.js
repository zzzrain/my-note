var http = require('http');
var socket = require('socket.io');

// 创建服务
var server = http.createServer(function(req,res){
	res.end('ok')
})
var io = socket(server);

// 创建连接
io.on('connection',function(socket){
	// 接收
	socket.on('message',function(data){
		// 发送
		io.sockets.emit('say',data)
	})
})
server.listen(10086)

/*var http = require('http')
var socket = require('socket.io')

var server = http.createServer()
var io = socket(server)

io.on('connection',function(socket){
	socket.on('message',function(data){
		io.sockets.emit('say',data)
	})
})
server.listen(10086)*/
