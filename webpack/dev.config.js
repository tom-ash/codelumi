var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var provideClientUrl = require('./providers/provide-client-url')
var provideApiUrl = require('./providers/provide-api-url')

var path = require('path')


var SRC_DIR = path.join(__dirname, "../src/dev");
var DIST_DIR = path.join(__dirname, "../dist/client");

var config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: SRC_DIR + '/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
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


// var webpack = require("webpack");
// var path = require("path");

// var DIST_DIR = path.join(__dirname, "dist/app");
// var SRC_DIR = path.join(__dirname, "src");

// var HtmlWebpackPlugin = require('html-webpack-plugin');

// var config = {
//   mode: 'development',
//   devtool: 'cheap-module-source-map',
//   entry: {
//     app: SRC_DIR + '/index.js'
//   },
//   output: {
//     path: DIST_DIR,
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   devServer: {
//     port: 8080,
//     publicPath: '/',
//     disableHostCheck: true,
//     historyApiFallback: {
//       index: '/index.html'
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         include: SRC_DIR,
//         loader: "babel-loader",
//         query: {
//           presets: ["react", "es2015", "stage-2"]
//         }
//       },
//       {
//         test:/\.(s*)css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       favicon: './src/favicon.png'
//     }),
//     new webpack.DefinePlugin({
//       'ENV': JSON.stringify('dev')
//     })
//   ]
// };

// module.exports = config;
