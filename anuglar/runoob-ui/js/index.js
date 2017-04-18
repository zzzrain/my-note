var app = angular.module('demo',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	
	// 第一层路由
	.state('html',{
		url:'/html',
		templateUrl:'page/html.html'
	})
	.state('suggest',{
		url:'/suggest',
		templateUrl:'page/suggest.html'
	})
	
	// 第二层路由
	.state('html.page1',{
		url:'/page1',
		templateUrl:'page/page1.html',
		controller:'page1Ctrl'
	})
	.state('html.page2',{
		url:'/page2',
		templateUrl:'page/page1.html',
		controller:'page2Ctrl'
	})
	.state('html.page3',{
		url:'/page3',
		template:'<p>page3</p>'
	})
	
	//第三层路由
	.state('html.page1.a',{
		url:'/a',
		templateUrl:'page/page1A.html'
	})
	.state('html.page1.b',{
		url:'/b',
		template:'<p>b</p>'
	})
		
	// 默认路由
	$urlRouterProvider.when('','/html')
})

app.controller("page1Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'a'
	},{
		url:'#!/html/page1/b',
		name:'b'
	},{
		url:'#!/html/page1/c',
		name:'c'
	}]
})
app.controller("page2Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'aaa'
	},{
		url:'#!/html/page1/b',
		name:'bbb'
	},{
		url:'#!/html/page1/c',
		name:'ccc'
	}]
})
