requirejs.config({
	baseUrl:'js',
	paths:{
		'jquery':'jquery-3.1.1',
		'zooms':'jquery.zoomPlus'
	},
	shim:{
		/*'zooms':{
			deps: ['jquery'],
			exports: 'jQuery.fn.zoom'
		}*/	
		// 插件简化写法
		'zooms': ['jquery']	
	}
});
