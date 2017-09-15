const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
let nodeModules = {};

fs.readdirSync(path.resolve(__dirname, '..', 'node_modules'))
	.filter(x => ['.bin'].indexOf(x) === -1)
	.forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });


module.exports = {
	name: 'server',
	context: path.join(__dirname, '..'),
	entry: './web/server.js',
	target: 'node',
	node: {
		dns: true,
		fs: true,
		path: true,
		url: true,
		console: false,
		global: true,
		process: true,
		__filename: true,
		__dirname: true,
		Buffer: true,
		setImmediate: true,
	},
	externals: nodeModules,
	output: {
		path: path.resolve(__dirname, '..'),
		filename: 'server.js',
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}],
		},
		{
			test: /.json$/,
			use: [{
				loader: 'json-loader',
			}],
		},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		moduleExtensions: ['-loader'],
	},
	plugins: [
		new webpack.DefinePlugin({
			'global.__DEVELOPMENT__': false,
			'global.__CLIENT__': false,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
	],
};
