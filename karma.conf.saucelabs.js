/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  const customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: '59'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '52'
    },
    'SL_Safari_9': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '9'
    },
    'SL_iOS': {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.10',
      version: '8.1'
    }
  };

  config.set({
    sauceLabs: {
      recordScreenshots: false,
      startConnect: true,
      testName: 'ibm cloud garage developer bootcamp web specs'
    },

    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {test: /\.styl$/, loader: 'style!css!stylus'},
          {test: /\.css/, loader: 'style!css'},
          { test: /\.json$/, loader: 'json-loader' },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/web\/lib/, /node_modules/, /server/],
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
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false},
      {pattern: 'web/data/*.json', watched: false, included: false, served: true, nocache: false}
    ],

    proxies: {
      '/': '/base/web/data/'
    },

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpackServer: {
      noInfo: true
    },

    autoWatch: false,
    basePath: '',
    browsers: Object.keys(customLaunchers),
    captureTimeout: 2400000,
    browserNoActivityTimeout: 2400000,
    colors: true,
    concurrency: 2,
    customLaunchers: customLaunchers,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_ERROR,
    port: 9876,
    reporters: ['mocha', 'saucelabs'],
    singleRun: true
  });
};
