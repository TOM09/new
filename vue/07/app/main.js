import Vue from "vue";

new Vue({
	el:"#mybox",
	data:{
		a:100,
		sex:"男",
		students:[
			{"name":"小王","sex":"男","age":"35"},
			{"name":"小张","sex":"男","age":"25"},
			{"name":"小李","sex":"男","age":"15"}
			]
	},
	methods:{
		add:function(number){
			this.a++;
			//对数组的操作
			this.students.pop();
		}
	}
}); 
