import React from "react";
import PropTypes from "prop-types";

class Sunzi extends React.Component{
	constructor(props,context){
			super();
			console.log(context)
		}
	render(){
		return (
			<div>
				<h1>孙子{this.context.a}</h1>
			</div>
		)
	}
}

Sunzi.contextTypes = {
		a:PropTypes.number.isRequired
	}

export default Sunzi;

//当祖先元素中更改了上下文的数据,此时所有的子孙元素中的数据都会更改,视图也会更新
//反之不成立,可以认为上下文的数据在自损元素中是只读的,此时又要需要使用奇淫技巧,就是在context中
//共享一个操作祖先元素的函数,子孙元素通过上下文获得这个函数,从而操作祖先元素的值.
//也就是说,state是自治的不涉及传值的事,props是单向的,父亲->儿子,context也是单
//向的,祖先->后代,如果要反向,就要传入一个函数

//数组和对象是引用类型值,当传来引用类型值时
