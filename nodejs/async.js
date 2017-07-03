var x = 1;

setTimeout(function(){
	x = 2;
	console.log(x)
},1000)

console.log(x)

function time(back){
	setTimeout(function(){
		x = 3;
		back();
	},1000)
}

time(function(){
	console.log(x)
})
