/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  const customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: '51'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '47'
    },
    'SL_Safari_8': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.10',
      version: '8'
    },
    'SL_Safari_9': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '9'
    },
    'SL_IE_10': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 2012',
      version: '10'
    },
    'SL_IE_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    'SL_EDGE': {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: '14'
    },
    'SL_iOS': {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.10',
      version: '8.1'
    }
  };

  config.set({
    client: {
      mocha: {
        timeout: 5000
      }
    },

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
    concurrency: 1,
    customLaunchers: customLaunchers,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_ERROR,
    port: 9876,
    reporters: ['mocha', 'saucelabs'],
    singleRun: true
  });
};
