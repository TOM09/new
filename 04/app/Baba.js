import React from "react";
//爸爸引用孙子
import Sunzi from "./Sunzi.js";
import PropTypes from "prop-types";

class Baba extends React.Component{
	constructor(props,context){
			super();
			console.log(context)
		}
	render(){
		return (
			<div>
				<h1>爸爸</h1>
				<Sunzi></Sunzi>
			</div>
		)
	}
}

//baba接收yeye传递过来的context,不加ChildContextTypes,只写contextTypes
//拿到后就可以在构造函数constructor里写上参数
Baba.contextTypes = {
		a:PropTypes.number.isRequired
	}

export default Baba;