var webpack = require('webpack')
var path = require('path')
var ROOT_DIR = path.join(__dirname, '../../../../')
var SRC_DIR = path.join(__dirname, '../client')
var DIST_DIR = path.join(__dirname, '../../../../dist/sites/skillfind-tech/client')
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
        { from: './src/sites/skillfind-tech/client/robots.txt', to: 'robots.txt' },
        { from: './src/sites/skillfind-tech/client/favicon.ico', to: 'favicon.ico' },
        { from: './src/sites/skillfind-tech/client/02e8773507b043c7ac1157ab259ed69c.txt', to: '02e8773507b043c7ac1157ab259ed69c.txt' },
      ],
    }),
  ],
}

module.exports = config
