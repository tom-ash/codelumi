var webpack = require("webpack")
const nodeExternals = require('webpack-node-externals')
var path = require('path')
var SRC_DIR = path.join(__dirname, './')
var DIST_DIR = path.join(__dirname, "../../dist/server")

var config = {
  optimization: {
    minimize: false
  },
  entry: {
    server: SRC_DIR + '/server.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
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
  plugins: [ new webpack.DefinePlugin({ 'APP_ENV': JSON.stringify(process.env.APP_ENV) }) ]
}

module.exports = config
