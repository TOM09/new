import Vue from "vue";
import CarBar from "./components/CarBar.js";
import $ from "jquery";
//在ready这个生命周期中发出ajax请求
var vm = new Vue({
	el:"#app",
	data:{
		"cars":""
	},
	components:{
		
	},
	methods:{
		
	},
	ready:function(){
		var self = this;
		$.get("/api/api.txt",function(data){
			self.cars = JSON.parse(data).result;
		})
	},
	components:{
		"car-bar":CarBar
	},
	computed:{
		"total":function(){
			var sum = 0
			return this.cars.forEach(function(item){
				if(!item.money){
					item.money=0;
				}
					sum+= item.money;
			})
			return sum;
		}
	}
}); 

