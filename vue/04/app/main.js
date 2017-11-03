import Vue from "vue";

//1.创建一个组件构造器
var MyCompo = Vue.extend({
	template : `
			<div>	
				<h1>我是my-compo组件</h1>
			</div>	
	`
})

//2.注册在全局
	Vue.component("my-compo",MyCompo)
	
	
//要确保在初始化根实例之前注册了组件
var vm = new Vue({
	el:"#mybox"
}); 

