let webpack = require('webpack');

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: './js/bundle.js'
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};