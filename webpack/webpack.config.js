module.exports = {
	//入口文件
	entry: __dirname + "/main.js",
	//导出文件
	output: {
		path: __dirname + "/src",
		filename: "bundle.js"
	},
	//vue2.0加上这句，然后暴露全局的vue函数
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	// 加载器
	module: {
		loaders: [{
			test: /\.js$/ ,
			loader: "babel-loader"
		},{
			test: /\.vue$/ ,
			loader: "vue-loader"
		},{
			test: /\.css$/ ,
			loader: "css-loader"
		}]
	},
	// 服务器
	devServer:{
		contentBase: "./src",
		// 监听
		inline: true
	}
}