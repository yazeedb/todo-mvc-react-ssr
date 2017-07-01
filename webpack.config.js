const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const root = (...args) => path.resolve(process.cwd(), ...args);

module.exports = (options) => {
  return {
    entry: path.resolve(process.cwd(), 'server.js'),
    output: {
      path: root('dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({ filename: '[name].css' })
    ],
    target: 'node',
    node: {
      global: true,
      __dirname: true,
      __filename: true,
      process: true,
      Buffer: false
    }
  };
};
