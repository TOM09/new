import Vue from "vue";

new Vue({
	el:"#mybox",
	data:{
		info:"",
		todos:[]
	},
	
	methods:{
		add:function(){
			this.todos.unshift(this.info);
		},
		delate:function(k){
			this.todos.splice(k,1);
		}
	}
}); 
