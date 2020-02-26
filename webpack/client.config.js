var webpack = require("webpack");
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')
var CopyPlugin = require('copy-webpack-plugin');

var config = {
  entry: {
    index: './src/client/index.js',
  },
  output: {
    filename: './client/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
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
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV))
    }),
    new CopyPlugin([
      { from: './src/client/robots.txt', to: './client/robots.txt' },
      { from: './src/client/sitemap.xml', to: './client/sitemap.xml' },
      { from: './src/client/favicon.png', to: './client/favicon.png' },
      { from: './src/client/favicon.ico', to: './client/favicon.ico' },
    ]),
  ]
};

module.exports = config
