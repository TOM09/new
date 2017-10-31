import React from "react";

//ref钩子

class My3 extends React.Component{
	constructor(){
		super();
		//定义h1标签里的click事件的this
//		this.clickHandler = (this.clickHandler).bind(this)
		
	}
	
	//ref钩子: ref="mybox"   引用的时候用:this.refs.mybox,即可操作ref为mybox的dom
	render(){
		return (
			<div>
				<input type="button" value="按我让盒子变色" onClick = {()=>{this.refs.mybox.style.backgroundColor="yellow"}}/>
				<p className="box" ref="mybox" style={{"width" : "200px","height" : "200px","background" : "red"}}></p>
			</div>
		)
	}
}
//向外暴漏
export default My3;
