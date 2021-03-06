import Vue from "vue";

var CarBar = Vue.extend({
	template:`
		<tr>
			<td>{{cars[index].name}}</td>
			<td>{{cars[index].price}}</td>
			<td>
				<button v-on:click="minus">-</button>
					{{cars[index].amount}}
				<button v-on:click="add">+</button>
			</td>
			<td>
				{{calc()}}
			</td>
			
		</tr>	
	`,
	props:["cars","index"],
	methods:{
		minus:function(){
		},
		add:function(){
			this.cars[this.index].amount++;
			this.cars[this.index].money = this.calc();
		},
		calc:function(){
			return this.cars[this.index].amount *this.cars[this.index].price;
		}
	},
	computed:{
		"money":function(){
			return this.calc()
		}
	}
})

export default CarBar;