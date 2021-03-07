var webpack = require("webpack");
var CopyPlugin = require('copy-webpack-plugin');
var path = require('path')
var SRC_DIR = path.join(__dirname, '../client')
var DIST_DIR = path.join(__dirname, "../../../../dist/sites/codelumi/client")

const LoadablePlugin = require('@loadable/webpack-plugin')

var config = {
  entry: {
    index: SRC_DIR + '/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
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
      path: DIST_DIR,
      filename: 'loadable-stats.json',
      writeToDisk: true
    }),
    new CopyPlugin([
      { from: './src/sites/codelumi/client/robots.txt', to: 'robots.txt' },
      { from: './src/sites/codelumi/client/sitemap.xml', to: 'sitemap.xml' },
      { from: './src/sites/codelumi/client/favicon.png', to: 'favicon.png' },
      { from: './src/sites/codelumi/client/favicon.ico', to: 'favicon.ico' },
    ]),
    new webpack.DefinePlugin({ 'APP_ENV': JSON.stringify(process.env.APP_ENV) })
  ]
};

module.exports = config
