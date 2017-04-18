// Do not change
// at all ....
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./app/Root.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    output: {
        filename: "public/bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.sass', '.css']
    },
    plugins: [
        new ExtractTextPlugin({ 
            filename: 'public/main.css', 
            allChunks: true,
            disable: false
        })
    ]
}
