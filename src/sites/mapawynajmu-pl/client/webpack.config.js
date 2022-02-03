var webpack = require("webpack");
var CopyPlugin = require('copy-webpack-plugin');
var path = require('path')
var SRC_DIR = path.join(__dirname, './')
var DIST_DIR = path.join(__dirname, "../../../../dist/sites/mapawynajmu-pl/client")

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
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
              configFile: SRC_DIR + 'tsconfig.json'
          },
        },
        exclude: /node_modules/
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
    new LoadablePlugin({
      path: DIST_DIR,
      filename: 'loadable-stats.json',
      writeToDisk: true
    }),
    new webpack.DefinePlugin({ 'APP_ENV': JSON.stringify(process.env.APP_ENV) }),
    new CopyPlugin([
      { from: './src/sites/mapawynajmu-pl/client/robots.txt', to: 'robots.txt' },
      { from: './src/sites/mapawynajmu-pl/client/sitemap.xml', to: 'sitemap.xml' },
      { from: './src/sites/mapawynajmu-pl/client/favicon.png', to: 'favicon.png' },
      { from: './src/sites/mapawynajmu-pl/client/favicon.ico', to: 'favicon.ico' },
    ])
  ]
};

module.exports = config
