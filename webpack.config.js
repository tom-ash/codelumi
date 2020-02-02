var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.join(__dirname, "dist/app");
var SRC_DIR = path.join(__dirname, "src");

var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },
      {
        test:/\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png'
    }),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'API_URL': JSON.stringify(getApiUrl(process.env.APP_ENV))
    })
  ]
};

function getApiUrl(appEnv) {
  switch (appEnv) {
    case 'development': return 'http://localhost:3001'
    case 'staging': return 'https://warsaw-lease-server-staging.herokuapp.com'
    case 'production': return 'https://warsawleaseserver.herokuapp.com'
    default: return ''
  }
}


module.exports = config;
