var webpack = require("webpack");
const LoadablePlugin = require('@loadable/webpack-plugin')
const nodeExternals = require('webpack-node-externals')
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')
var provideAwsS3Url = require('./providers/provide-aws-s3-url')
var path = require('path')
var DIST_DIR = path.join(__dirname, "../dist/server")

var config = {
  entry: {
    server: './src/server/server.js',
  },
  output: {
    path: DIST_DIR,
    filename: 'server.js',
    publicPath: '/'
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
    new LoadablePlugin({ filename: 'stats.json', writeToDisk: true }),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV)),
      'AWS_S3_URL': JSON.stringify(provideAwsS3Url(process.env.APP_ENV))
    })
  ]
}

module.exports = config
