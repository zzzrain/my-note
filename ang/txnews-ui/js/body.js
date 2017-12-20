angular.module('demo',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	
	// 第一层
	.state('body',{
		url:'/body',
		templateUrl:'html/body.html'
	})

	// 第二层
	.state('body.page1',{
		url:'/page1',
		templateUrl:'html/page1.html'
	})
	.state('body.page2',{
		url:'/page2',
		templateUrl:'html/page2.html'
	})
	.state('body.page3',{
		url:'/page3',
		templateUrl:'html/page3.html'
	})
	.state('body.page4',{
		url:'/page4',
		templateUrl:'html/page4.html'
	})
	
	$urlRouterProvider.when('','/body')
})
