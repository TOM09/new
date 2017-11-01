import Vue from "vue";

var vm = new Vue({
	el:"#mybox",
	data:{
		a:1,
		b:2,
		c:3,
		d:1,
		somehtml:"<ul><li>哈哈</li><li>你好</li></ul>",
		txt:"asdf",
		ppshow:false
	},
	
	methods:{
		add:function(){
			this.d++
		},
		changeppshow:function(){
			this.ppshow = !this.ppshow
		}
	}
}); 

vm.$watch("d",function(newvalue,oldvalue){
		console.log(newvalue,oldvalue)
	});
vm.d = 4;