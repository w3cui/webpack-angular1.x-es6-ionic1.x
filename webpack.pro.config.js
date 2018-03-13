'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Module dependencies
 */
module.exports = {
    cache: false,
    minify:false,
    entry: {
        'app': __dirname + '/src/main'
    },

    output: {
        path: 'build/',
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
        }, {
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel',
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=./style/font/[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=192&name=./style/images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }]
    },
    resolve: {
        root: [
            './node_modules',
            './src/lib'
        ],
        moduleDirectories: [
            'bower_components',
        ],
        alias: {
            '@':path.resolve(__dirname,'src'),
        }
    },

    externals: {
        "angular": "window.angular",
        "angular-ui-router": "\'ui.router\'",
        "angular-ui-bootstrap": "\'ui.bootstrap\'",
        "lodash":"window._",
        "WebUploader":"window.WebUploader",
        "wangEditor":"window.wangEditor"
    },

    plugins: [
        new ExtractTextPlugin("./styles.css"),
        new webpack.optimize.UglifyJsPlugin({
          minimize: false,
          compress: {
            warnings: false,
          },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Angular with webpack',
            inject: 'body'
        }),
    ],
    //watch:true
};