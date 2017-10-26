import React from "react";
//或者 import React, {component} from "react";则下面的React.Component可以写成Component.{}可以自动解构

class App extends React.Component{
	//在组件内部类定义里写constructor构造器,里面定义this.a = 100.
	//表示给组件的实例绑定一个a属性,值是100
	//继承了一个类,必须用super来调用
	//在jsx中使用的时候,直接this.a即可
	
	
	//内置属性的改变,不会影响v-dom(属性)的改变,所以this.a不会改变
	//闭包中的值的变化,也不会引起视图的改变!
	constructor(){
		super();
		//构造函数执行的时候,a就加在了这个App对象身上
		this.a = 100;
	}
	add(){
		this.a++;
		console.log(this.a)
	}
	//bind的好处是不会刺激函数运行,而是定义函数的上下文,绑定this
	//1.on事件,onClick,onMousedown,onMouseenter,onBlur把on后面的字母大写,react会自动识别react事件
	//2.绑定函数的时候,this上下文是有问题的,所以需要使用bind()方法来设置上下文
	//3.绑定监听事件的时候,注意用{}而不是"".
	render(){
		return (
			<div>
			 	<p>{this.a}</p>
				<p>
					<input type = "button" value = "按我" onClick = {this.add.bind(this)} />	
				</p>
			</div>
			
		)
	}
}

//向外暴漏
export default App;
