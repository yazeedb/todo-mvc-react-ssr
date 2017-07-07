const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clientConfig = require('./webpack/clientConfig');
const serverConfig = require('./webpack/serverConfig');

const commonConfig = {
  output: { filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [ new ExtractTextPlugin({ filename: '[name].css' }) ]
};

module.exports = [
  webpackMerge({}, commonConfig, clientConfig),
  webpackMerge({}, commonConfig, serverConfig)
]
