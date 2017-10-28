//引用App这个组件
import React from "react";
//render自动被枚举,调用自react-dom
import {render} from "react-dom";
//下面render函数里使用了App   引入编写的组件
import App from "./App.js";

//不用大括号的调用是defout调用的,
//带大括号的调用是actor暴露的,actor暴露可以自动被枚举,它要挂载在html的app_box容器里  所以在render里获取这个id  
//actor(参与者 行为者)


//App是组件,main是接收者



//调用render函数,使用App,使用挂载组件用了两个参数
//第一个参数是jsx语法
//第二个参数表示组件挂在哪里


render(
	<App></App>,
	document.getElementById("app_box")
);
