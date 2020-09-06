var webpack = require("webpack");
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')
var CopyPlugin = require('copy-webpack-plugin');
var provideAwsS3Url = require('./providers/provide-aws-s3-url')
var path = require('path')
var DIST_DIR = path.join(__dirname, "../dist/client")

var config = {
  entry: {
    index: './src/client/index.js',
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
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'CLIENT_URL': JSON.stringify(provideClientUrl(process.env.APP_ENV)),
      'API_URL': JSON.stringify(provideApiUrl(process.env.APP_ENV)),
      'AWS_S3_URL': JSON.stringify(provideAwsS3Url(process.env.APP_ENV))
    }),
    new CopyPlugin([
      { from: './src/client/robots.txt', to: 'robots.txt' },
      { from: './src/client/sitemap.xml', to: 'sitemap.xml' },
      { from: './src/client/favicon.png', to: 'favicon.png' },
      { from: './src/client/favicon.ico', to: 'favicon.ico' },
    ]),
  ]
};

module.exports = config
