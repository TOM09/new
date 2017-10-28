//props 就是定义在自定义组件标签上面的值,就是props,当props改变的时候,会引发virtual dom的改变,从而引发视图的重绘.
import React from "react";
//main.js引用了App.js,   App.js又引用了MyCompo.js
import MyCompo from "./MyCompo.js";

class App extends React.Component{
	
	constructor(){
		super();
	}
	
	//c的属性加引号是字符串  所以改成数字,用{}包裹
	render(){
		return (
			<div>
				<MyCompo a="我是" b="77" c={88}></MyCompo>
			</div>
			
		)
	}
}

//向外暴漏
export default App;
