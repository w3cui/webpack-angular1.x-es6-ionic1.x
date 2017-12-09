'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/**
 * Module dependencies
 */
module.exports = {
    cache: false,
    entry: {
        'app': __dirname + '/src/main'
    },

    output: {
        publicPath: "/build/",
        path: path.resolve(__dirname, "build"),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
        }, {
            test: /\.html$/,
            loader: 'html'
        },{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }]
    },
    babel: {
        babelrc: false,
        presets: [
            ['es2015'],
        ],
    },
    resolve: {
        root: [
            './node_modules',
            './src/lib'
        ],
        moduleDirectories: [
            'bower_components',
        ],
        alias: {}
    },

    externals: {
        "angular": "angular",
        "uirouter": "\'ui.router\'",
        'ionic': 'ionic'
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: __dirname + '/src/style', 
            to: __dirname + '/build/style',
        }], {
            ignore: [],
            copyUnmodified: true,
            debug: "debug"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Angular with webpack',
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8088/build/index.html'
        }),
    ],
    watch:true
};