/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.css/, loader: 'style!css'},
      {test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/web\/lib/, /node_modules/, /server/]
      },
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './web/data/products.json' }
    ])
  ]
};
