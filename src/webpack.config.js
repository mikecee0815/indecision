const path = require('path');
// this is the path to where webpack is going to output the bunlde file
// path.join(__dirname, '/public')
// console.log(path.join(__dirname, '/public'))


module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
	},
	module: {
		rules:[
		{
			loader:'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test:/\.css$/,
			use:[
				'style-loader','css-loader']
		}
		]
	}
};