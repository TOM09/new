import React from "react";

//react中的表单

class My2 extends React.Component{
	constructor(){
		super();
		//设置state的txt为空
		this.state = {
			txt :""
		}
		//定义h1标签里的click事件的this
	this.change = (this.change).bind(this);
	}
	
	//做一个效果:文本框中输入内容,实时改变h1中的内容:
	//触发的时候引起的事件对象event
	//设置txt的内容为输入的内容.txt此时在h1中输出,而事件对象是input的输入的内容,此时达到双向绑定的样子
	change(event){
		this.setState({"txt" : event.target.value})
	}
	
	render(){
		return (
			<div>
				<input type="text" onInput = {this.change}/>
				<h1>{this.state.txt}</h1>
			</div>
		)
	}
}
//向外暴漏
export default My2;
