import Vue from "vue";
import RangeBar from "./components/RangeBar.js";

var vm = new Vue({
	el:"#app",
	data:{
		color:{
			"r":200,
			"g":100,
			"b":300
		}
	},
	components:{
		"range-bar":RangeBar
	}
}); 

/*
//1.创建一个组件构造器
var MyCompo = Vue.extend({
	template : `
			<div>	
				<h1>我是my-compo组件</h1>
			</div>	
	`
})

//Vue.component("my-compo",MyCompo)
	
	
*/