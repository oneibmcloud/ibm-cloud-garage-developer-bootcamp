/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  const customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: '51'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '47'
    }
  };

  console.log(process.env.SAUCE_USERNAME);
  console.log(process.env.SAUCE_ACCESS_KEY);

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
    customLaunchers: customLaunchers,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    reporters: ['mocha', 'saucelabs'],
    singleRun: true
  });
};
