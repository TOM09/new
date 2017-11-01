import Vue from "vue";

var vm = new Vue({
	el:"#mybox",
	data:{
		a:1,
		w:300,
		iscur:true,
		isspec:true,
		ashow:true,
		xingbie:"男",
		arr:["春","夏","秋","冬"],
		arr2:[
		{"xuehao":1001,"name":"小名"},
		{"xuehao":1002,"name":"小红"},
		{"xuehao":1003,"name":"小刚"}
		],
		obj:{"xuehao":1001,"name":"小名"}
		
	},
	methods:{
		add:function(){
			this.w += 10
		},
		change:function(){
			this.ashow = !this.ashow
		},
		change2:function(){
			this.xingbie = this.xingbie=="男"?"女":"男";
		},
		change3:function(){
			this.arr.$set(1,"我的");
		},
		change4:function(){
			this.arr2 = [
				{"xuehao":1001,"name":"小小李"},
				{"xuehao":1005,"name":"小小刚"} 
			]
		}
	},
	computed:{
		b:function(){
			return this.a * this.a
		}
	}
}); 

