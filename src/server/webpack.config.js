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
    server: SRC_DIR + '/server.ts'
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
        test: /(\.jsx?|.tsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
            }
          }
        ],
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
  plugins: [ new webpack.DefinePlugin({ 'APP_ENV': JSON.stringify(process.env.APP_ENV) }) ]
}

module.exports = config
