//props 就是定义在自定义组件标签上面的值,就是props,当props改变的时候,会引发virtual dom的改变,从而引发视图的重绘.
import React from "react";

//类型验证  引用.prop-types需要NPM安装
import {PropTypes} from "prop-types";


class MyCompo extends React.Component{
	//当props作为参数传进来时,就可以通过state来使用它了
	//如果想往父级传,可以在父亲当中有个引用类型值
	constructor(props){
		super();
		this.state={
			c:props.c
		}
	}
	//父组件App 想往子组件中传值,在子组件中直接使用属性,this.props.a:
	//如果需要在构造函数中使用这个值,此时给构造函数constructor的参数里传参,第一个参数是props,第二个是context
	
	//单向绑定,props属性只读,在子组件中,不允许更改父组件传进来的属性
	//如果非要修改这个属性,此时只能用其他技巧.
	//即父组件通过传一个参数给子组件,子组件通过传参数将数据返回给父组件的函数,
	//父组件的函数接受实参,来改变父组件中的state
	render(){
		return (
			<div>
				我是MyCompo组件
				{this.props.a}
				{this.props.b}
				{this.state.c}
				<p>
					<input type="button" value="按我" onClick={()=>{this.setState({c:this.state.c+1});}} />
				</p>
			</div>
			
		)
	}
}

//定义组件需要传入的参数类型  isRequired    定义过后  传入的参数类型必须按这个要求
//这个属性是MyCompo这个类的属性,不能在类里写this.proptypes,因为在类里写的this指向的是实例
//类名.propTypes  他的值是json json的key 是需要传进来的props属性名,value是对它的限制和规定
MyCompo.propTypes = {
	a:PropTypes.string.isRequired,//这里是要求a是一个字符串,并且必传
	b:PropTypes.string,				//这里是要求b是一个字符串,不必传
	c:PropTypes.number.isRequired
}
//向外暴漏
export default MyCompo;
