requirejs(['config'],function(){
	requirejs(['jquery','zooms'],function($){
		console.log($)
		$(()=>{
			$('.wrap').zoom();
		});
	});
});
