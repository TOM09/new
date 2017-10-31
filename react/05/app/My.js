import React from "react";
//当现在的组件仅仅是为了呈递一些DOM元素,没有state,props等东西,此时可以不用费劲,直接:
//一个简单函数即可
/*export default ()=>{
	return(
		<div>
			<h1>我是My组件</h1>
		</div>
	)
}*/
class My extends React.Component{
	constructor(){
		super();
		this.state = {
			isLike :true
		}
		//定义h1标签里的click事件的this
		this.clickHandler = (this.clickHandler).bind(this)
	}
	
	clickHandler(){
		this.setState({isLike:!this.state.isLike})
	}
	
	render(){
		return (
			<div>
				<h1 onClick = {this.clickHandler}>你{this.state.isLike?"喜欢":"不喜欢"}我,点击更改</h1>
			</div>
		)
	}
}
//向外暴漏
export default My;

//设置默认属性的方法
/*
   constructor(){
		super();
		this.state = {
			name : props.name ||"菜鸟"
		}
}

//父组件中接收为:此处如果没有写name  则输出菜鸟,写了name=大神,则输出大神
<My name = "大神"><My/>
*/
