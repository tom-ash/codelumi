var webpack = require('webpack')
var path = require('path')
var ROOT_DIR = path.join(__dirname, '../../../../')
var SRC_DIR = path.join(__dirname, './')
var DIST_DIR = path.join(__dirname, '../../../../dist/sites/mapawynajmu-pl/client')
var CopyPlugin = require('copy-webpack-plugin')

const LoadablePlugin = require('@loadable/webpack-plugin')

var config = {
  entry: {
    index: SRC_DIR + '/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx?|.tsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: ROOT_DIR + 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'isomorphic-style-loader-react18',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/i,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new LoadablePlugin({
      path: DIST_DIR,
      filename: 'loadable-stats.json',
      writeToDisk: true,
    }),
    new webpack.DefinePlugin({ APP_ENV: JSON.stringify(process.env.APP_ENV) }),
    new CopyPlugin({
      patterns: [
        { from: './src/sites/mapawynajmu-pl/client/robots.txt', to: 'robots.txt' },
        { from: './src/sites/mapawynajmu-pl/client/favicon.ico', to: 'favicon.ico' },
        {
          from: './src/sites/mapawynajmu-pl/client/1ea0f903dd9c43f2b183ba19abbd6cb9.txt',
          to: '1ea0f903dd9c43f2b183ba19abbd6cb9.txt',
        },
      ],
    }),
  ],
}

module.exports = config
