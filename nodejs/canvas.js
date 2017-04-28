// 请求模块
var http = require('http')
var socket = require('socket.io')

// 开启服务
var server = http.createServer()
var io = socket(server)

// 开启连接
io.on('connection',function(socket){
	// 储存答案
	var ans;
	socket // 接收信息（坐标、停笔、清空）
	.on('path',function(data){
		// 广播信息（信息名字、数据）
		io.sockets.emit('res',data)
	})
	.on('stop',function(){
		io.sockets.emit('res','stop')
	})
	.on('clear',function(){
		io.sockets.emit('res','clear')
	})
	.on('que',function(data){
		ans = data;
	})
	.on('ans',function(data){
		if(ans == data)
		io.sockets.emit('res','correct')
		else 
		io.sockets.emit('res','wrong')
	})
})

server.listen(10086)