const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//TODO Setup http://webpack.github.io/docs/configuration.html#resolve-root

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    
    output: {
        path: 'build',
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            showErors: true
        }),
        new ExtractTextPlugin("app.css")
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
            {
                presets: ['stage-2', 'es2015', 'react']
            }
        },
            {
                test: /(\.scss|\.css|\.sass)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap',
                    require.resolve('sass-loader') + '?sourceMap'
                ],
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            }, {
                test: /\.txt$/,
                loader: 'raw-loader',
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            }
        ]
    },

    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },

    devServer: {
        port: 80,
        host: '0.0.0.0',
        progress: true,
        contentBase: './build',
        publicPath: '/',
        stats: { colors: true },
        proxy: {
            '/api': {
                target: 'http://192.168.99.101:8080',
                secure: false,
                pathRewrite: {'^/api' : ''}
            }
        }
    }
};