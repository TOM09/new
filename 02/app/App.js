import React from "react";

class App extends React.Component{
	//继承了一个类,必须用super来调用
	
	//内置属性的改变,不会影响v-dom(属性)的改变,所以this.a不会改变
	//闭包中的值的变化,也不会引起视图的改变!
	//React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
	//React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
	//只有更新状态三兄弟,才会引发virtual DOM的改变,从而改变DOM
	
	//定义state:在构造函数中,使用state属性即可.
	//使用state,在jsx中{this.state.a}
	//改变state,this.setState({a:this.state.a+1}),不能写++,因为state属性只读
	
	//state是内部的(所以也叫local state),只有组件自己能改变自己的state,别人想改变自己的state,都不可能.
	//getInitialState 方法可以用于定义初始状态
	
	//后面学了redux架构后,所有组件自己的state越来越少用了,而是变为了redux中的state,不要混淆.
	
	constructor(){
		super();
		//构造函数执行的时候,a就加在了这个App对象身上
		this.state = {
			a:100,
			b:100,
			c:100
		}
	}
	add(){
		this.setState({a:this.state.a+1});
		this.setState({b:this.state.b+1})
		
	}
	//bind的好处是不会刺激函数运行,而是定义函数的上下文,绑定this
	//1.on事件,onClick,onMousedown,onMouseenter,onBlur把on后面的字母大写,react会自动识别react事件
	//2.绑定函数的时候,this上下文是有问题的,所以需要使用bind()方法来设置上下文
	//3.绑定监听事件的时候,注意用{}而不是"".
	render(){
		return (
			<div>
			 	<h1>我是APP组件</h1>
				<p>我有状态state</p>
				<p>a:{this.state.a}</p>
				<p>b:{this.state.b}</p>
				<p>c:{this.state.c}</p>
				
				<p>
					<input type = "button" value = "按我只让a和b加1" onClick = {(this.add).bind(this)} />	
				</p>
				
			</div>
			
		)
	}
}

//向外暴漏
export default App;
