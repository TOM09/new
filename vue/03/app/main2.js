import Vue from "vue";

var vm = new Vue({
	el:"#mybox",
	data:{
		a:1,
		b:2,
		c:3,
		d:1
	},
	
	methods:{
		add:function(){
			this.d++
		}
	}
}); 

vm.$watch("d",function(newvalue,oldvalue){
		console.log(newvalue,oldvalue)
	});
vm.d = 4;