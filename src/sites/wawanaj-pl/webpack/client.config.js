var webpack = require("webpack");
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')
var CopyPlugin = require('copy-webpack-plugin');
var provideAwsS3Url = require('./providers/provide-aws-s3-url')
var path = require('path')
var SRC_DIR = path.join(__dirname, '../client')
var DIST_DIR = path.join(__dirname, "../../../../dist/sites/wawanaj-pl/client")

const LoadablePlugin = require('@loadable/webpack-plugin')

var config = {
  entry: {
    index: SRC_DIR + '/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
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
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  plugins: [
    new LoadablePlugin({
      filename: 'loadable-stats.json',
      writeToDisk: true
    }),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV)),
      'AWS_S3_URL': JSON.stringify(provideAwsS3Url(process.env.APP_ENV))
    }),
    new CopyPlugin([
      { from: './src/sites/wawanaj-pl/client/robots.txt', to: 'robots.txt' },
      { from: './src/sites/wawanaj-pl/client/sitemap.xml', to: 'sitemap.xml' },
      { from: './src/sites/wawanaj-pl/client/favicon.png', to: 'favicon.png' },
      { from: './src/sites/wawanaj-pl/client/favicon.ico', to: 'favicon.ico' },
    ]),
  ]
};

module.exports = config
