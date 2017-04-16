const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8090,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias :{
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugin: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtracttextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woof|.woff2|.ttf|.eot|.svg*.*$/,
            loader:'file'
        }]
    }
}