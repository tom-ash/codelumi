var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var SRC_DIR = path.join(__dirname, '../dev')
var DIST_DIR = path.join(__dirname, '../client')

var config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
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
    disableHostCheck: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/i,
        use: 'raw-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/sites/soundof-it/dev/index.html',
      favicon: './src/sites/soundof-it/dev/favicon.png'
    }),
    new webpack.DefinePlugin({ 'APP_ENV': JSON.stringify(process.env.APP_ENV) })
  ]
}

module.exports = config
