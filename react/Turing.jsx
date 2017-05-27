var Test = React.createClass({
	render:function(){
		return <h1>success</h1>
	}
})

var Turing = React.createClass({
	// 初始化数据，相当于data(){}
	getInitialState:function(){
		return {
			title:'图灵机器人'
		}
	},
	handle:function(e){
		this.setState({
			que:e.target.value
		})
	},
	send:function(){
		$.get(
			'http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf',
			{info:this.state.que},
			function(data){
				console.log(data)
				this.setState({
					ans:data.text
				})
			}.bind(this)
		)
	},
	render:function(){
		return <div>
			<h2>{this.state.title}</h2>
			<input type="text" onChange={this.handle}/>
			<button onClick={this.send}>发送</button>
			<p>{this.state.ans}</p>
		</div>
	}
})
