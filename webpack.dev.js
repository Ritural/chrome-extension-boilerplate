const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map', // Sets up sourcemaps to be used in the browser

  watch: true,
  watchOptions: {
    aggregateTimeout: 850,
    ignored: /node_modules/
  },
});