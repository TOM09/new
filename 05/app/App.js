import React from "react";
//import My from "./My.js";
import My2 from "./My2.js";
import My3 from "./My3.js";

class App extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return (
			<div>
				<My2></My2>
				<My3></My3>
			</div>
		)
	}
}

//向外暴漏
export default App;
