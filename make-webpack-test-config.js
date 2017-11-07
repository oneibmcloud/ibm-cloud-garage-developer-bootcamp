const webpack = require('./webpack.config');
webpack.devtool = 'inline-source-map';

const junitReporter = { outputDir: 'generated' };

const files = [
  'spec.bundle.js',
  {pattern: 'web/data/*.json', watched: false, included: false, served: true, nocache: false}
];

const proxies = { '/': '/base/web/data/' };
const preprocessors = { 'spec.bundle.js': ['webpack', 'sourcemap'] };
const webpackServer = { noInfo: true };

module.exports = {
  webpack,
  junitReporter,
  files,
  proxies,
  preprocessors,
  webpackServer,

  autoWatch: true,
  autoWatchBatchDelay: 100,
  basePath: '',
  browsers: ['Firefox'],
  colors: true,
  exclude: [],
  frameworks: ['mocha', 'should', 'testdouble'],
  port: 9876,
  reporters: ['mocha', 'growl', 'junit'],
  singleRun: false
};


