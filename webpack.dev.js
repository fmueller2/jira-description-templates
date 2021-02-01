const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 600
  },
  watchOptions: {
    ignored: ['dist/**', 'node_modules/**']
  },
});