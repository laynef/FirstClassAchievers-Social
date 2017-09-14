const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	name: 'browser',
	context: path.join(__dirname, '..'),
	entry: [
		'./web/client.js',
	],
	output: {
		path: path.resolve(__dirname, '..', 'assets', 'dist'),
		publicPath: 'https://localhost:2001/dist/bundle.js',
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}, {
				loader: 'eslint-loader',
			}],
		},
		{
			test: /.json$/,
			use: [{
				loader: 'json-loader',
			}],
		},
		{
			test: /.css$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader'],
			}),
		},
		{
			test: /.scss$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
			}),
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "url-loader?limit=10000&mimetype=application/font-woff",
			}],
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "url-loader?limit=10000&mimetype=application/font-woff",
			}],
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "url-loader?limit=10000&mimetype=application/octet-stream",
			}],
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "file-loader",
			}],
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "url-loader?limit=10000&mimetype=image/svg+xml",
			}],
		},
		{ test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery' },
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json', '.css', '.scss', '.sass'],
		moduleExtensions: ['-loader'],
	},
	devServer: {
		contentBase: path.join(__dirname, 'assets'),
		compress: true,
		port: 2001,
		quiet: true,
		noInfo: true,
		hot: true,
		inline: true,
		lazy: false,
		publicPath: 'https://localhost:2001/dist/bundle.js',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		stats: {
			colors: true,
		},
	},
	plugins: [
		new ExtractTextPlugin({
			allChunks: true,
			disable: false,
			filename: 'bundle.css',
		}),
		new webpack.DefinePlugin({
			'global.__DEVELOPMENT__' : true,
			'global.__CLIENT__': true,
		}),
		new webpack.ProvidePlugin({
			'window.Tether': 'tether',
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				devtools: 'source-map',
			},
		}),
	],
};
