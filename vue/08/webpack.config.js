 const path = require('path');
 var ExtractTextPlugin = require("extract-text-webpack-plugin")
 
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
			},
			{
			  test: /\.vue$/,
			  loader: 'vue-loader',
			  options: {
				    loaders: {
				      scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
				      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
				 },
				 extractCSS: true
			  }
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("style.css")
	],
	 resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
	    }
  }
}