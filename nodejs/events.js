var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('event',()=>{
	console.log('事件驱动')
})
emitter.emit('event');
