const path = require('path');

module.exports = {
	//入口  惯例用main.js
	entry: "./app/main.js", // string | object | array
	//出口  惯例用all.js
	output: {
		path: path.resolve(__dirname, "dist"), // string
		filename: "all.js" // string
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015','react']
				}
			}
		}]
	},
	watch:true
}  