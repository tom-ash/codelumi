var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')

var config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    server: './src/client/index.js',
  },
  output: {
    filename: './client/bundle.js'
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
        exclude: /(node_modules|bower_components)/,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/dev/index.html',
      favicon: './src/dev/favicon.png'
    }),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV))
    })
  ]
}

module.exports = config
