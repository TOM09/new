import React from "react";
//爷爷引用爸爸
import Baba from "./Baba.js";
//爷爷引用孙子
import Sunzi from "./Sunzi.js";


class Yeye extends React.Component{

		constructor(){
			super();
			//在爷爷的构造函数里写this.state,里面的属性可以传递给下一组件<Baba>
			this.state={
				a:100
			}
		}
	render(){
		return (
			<div>
				<h1>爷爷</h1>
				//此处将Yeye的this,state.a传递进Baba
				<Baba a = {this.state.a}></Baba>
			</div>
		)
	}
}

export default Yeye;

//爸爸组件
import React from "react";
import Sunzi from "./Sunzi.js";

class Baba extends React.Component{
	render(){
		return (
			<div>
		//此处baba用this.props.a的方法就接收到了this.state.a的值
				<h1>爸爸{this.props.a}</h1>
		//并且可以用这个方法继续传递给sunzi组件
				<Sunzi a={this.props.a}></Sunzi>
			</div>
		)
	}
}
export default Baba;