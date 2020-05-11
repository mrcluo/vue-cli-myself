const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode:'development',
	entry:'./src/main.js',
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:['vue-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({template: './template.html'})
	]
}