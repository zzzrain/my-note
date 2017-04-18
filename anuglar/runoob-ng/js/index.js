angular.module('demo',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/page1',{
		templateUrl:'page/page1.html'
	})
	.when('/page2',{
		templateUrl:'page/page2.html'
	})
	.when('/page3',{
		templateUrl:'page/page3.html'
	})
})
.directive('oheader',function(){
	return {
		templateUrl:'page/search.html'
	}
})
.directive('osearch',function(){
	return {
		templateUrl:'page/header.html'
	}
})