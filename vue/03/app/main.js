import Vue from "vue";

var vm = new Vue({
	el:"#mybox",
	data:{
		a:1,
		hobby:[],
		jiguan:[]
	},
	computed:{
		b:function(){
			return this.a + 1
		}
	}
}); 

