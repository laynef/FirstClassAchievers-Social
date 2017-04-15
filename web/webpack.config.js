// Do not change
// at all ....
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
      "babel-polyfill",
      "./app/Root.js"
  ],
   output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'stage-3', 'es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname + '/public'),
        attrs: ['img:src', 'link:href']
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.sass', '.css']
    },
    plugins: [
        new ExtractTextPlugin('public/main.css', { allChunks: true })
    ]
}
