const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./demo/main.js",
	output: {
		path: __dirname,
		filename: "demo/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
				}
			},
		]
	},
	watch: true
};