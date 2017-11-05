import Vue from "vue";

var CarBar = Vue.extend({
	template:`
		<tr>
			<td>{{item.name}}</td>
			<td>{{item.price}}</td>
			<td>
				<button v-on:click="minus">-</button>
				{{item.amount}}
				<button v-on:click="add">+</button>
			</td>
			<td>
				{{calc()}}
			</td>
			
		</tr>	
	`,
	props:["item"],
	methods:{
		minus:function(){
			this.item.amount --;
			this.item.itemMoney = this.calc();
		},
		add:function(){
			this.item.amount ++;
			this.item.itemMoney = this.calc();
		},
		calc:function(){
			return this.item.amount*this.item.price
		}
	},
	computed:{
		"money":function(){
			return this.calc()
		}
	}
})

export default CarBar;