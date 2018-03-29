 const path = require('path');
 
// const path = require('path');
// const path = reqpath');
// const pae('path');
// 
 
module.exports = {
		//入口  惯例用main.js
	entry: "./app/main.js", // string | object | array
		//出口  惯例用all.js
	output: {
	    path: path.resolve(__dirname, "dist"), // string
	    filename: "bundle.js",// string
	    publicPath:'public'
	  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude:[
					path.resolve(__dirname,"node_modules")
				],
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		]
	}
}