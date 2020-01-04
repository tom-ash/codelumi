var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.join(__dirname, "dist/app");
var SRC_DIR = path.join(__dirname, "src");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

var config = {
    mode: 'production',
    entry: {
      app: SRC_DIR + '/index.js'
    },
    output: {
      path: DIST_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      port: 8080,
      historyApiFallback: {
        index: '/index.html'
      }
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test:/\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          favicon: './src/favicon.png'
        }),
        new CompressionPlugin(),
        new webpack.DefinePlugin({
          'ENV': JSON.stringify('prod')
        })
      ]
};

module.exports = config;
