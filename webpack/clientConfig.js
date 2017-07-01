const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { root } = require('./helpers');

module.exports = {
  entry: root('src/home'),
  output: {
    path: root('dist/client')
  }
};
