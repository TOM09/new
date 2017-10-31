import React from "react";
import Yeye from "./Yeye.js";

class App extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return (
			<div>
				<Yeye></Yeye>			
			</div>
			
		)
	}
}

//向外暴漏
export default App;
