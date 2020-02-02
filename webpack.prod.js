var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.join(__dirname, "dist/app");
var SRC_DIR = path.join(__dirname, "src");

var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

var config = {
  mode: 'production',
  entry: { app: SRC_DIR + '/index.js' },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [
    new CompressionPlugin(),
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
