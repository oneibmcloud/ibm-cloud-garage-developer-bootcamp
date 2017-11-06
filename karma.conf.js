/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  config.set({
    junitReporter: {
      outputDir: 'generated'
    },

    webpack: webpackConfig,

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

    autoWatch: true,
    autoWatchBatchDelay: 100,
    basePath: '',
    browsers: ['jsdom'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should', 'testdouble'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl', 'coverage', 'junit'],
    singleRun: false
  });
};
