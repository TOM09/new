import React from "react";
//爷爷引用爸爸
import Baba from "./Baba.js";
//引入prop-types
import PropTypes from "prop-types";


class Yeye extends React.Component{

		constructor(){
			super();
			this.state={
				a:100
			}
		}
		
	render(){
		return (
			<div>
				<h1>爷爷{this.state.a}
					<input type = "button" value = "按我" onClick={()=>{this.setState({a:this.state.a+1})}}/>
				</h1>
				<Baba></Baba>
			</div>
		)
	}

	//得到孩子上下文,实际上这里表示一种设置
	//得到孩子上下文,实际上这里表示一种设置,返回一个对象,这个对象就是现在这个家族
 //体系共享的上下文.将上下文中的a值变为自己的状态中的a值
	getChildContext(){
		return{
			a:this.state.a
		}
	}
}

//yeye往下传context,
//设置child的上下文类型
	Yeye.childContextTypes = {
		a:PropTypes.number.isRequired
	}

export default Yeye;