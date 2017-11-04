import Vue from "vue";

var MyCompo1 = Vue.extend({
	template:`
		<div>
			{{chinesename}}<input type="range" min="0" max="255" v-model="color[colorname]" />{{color[colorname]}}
			<input type="text" v-model="color[colorname]" >
		</div>
		`,
		props:["color","colorname","chinesename"]
});

export default MyCompo1;