var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')
var provideAwsS3Url = require('./providers/provide-aws-s3-url')
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
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    publicPath: '/',
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
        test: /\.scss$/,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/sites/warsawlease-pl/dev/index.html',
      favicon: './src/sites/warsawlease-pl/dev/favicon.png'
    }),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV)),
      'AWS_S3_URL': JSON.stringify(provideAwsS3Url(process.env.APP_ENV))
    })
  ]
}

module.exports = config
