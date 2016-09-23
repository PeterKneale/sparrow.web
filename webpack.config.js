const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
    ],

    devServer: {
        port: 8080,
        host: '0.0.0.0',
        progress: true,
        contentBase: './build',
        publicPath: '/',
        stats: { colors: true }
    }
};