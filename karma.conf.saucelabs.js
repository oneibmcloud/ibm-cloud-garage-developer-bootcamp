/*eslint no-unused-vars: "off"*/
const testConfig = require('./make-webpack-test-config');

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

module.exports = function(config) {
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

    webpack: testConfig.webpack,
    files: testConfig.files,
    proxies: testConfig.proxies,
    preprocessors: testConfig.preprocessors,
    webpackServer: testConfig.webpackServer,

    autoWatch: false,
    basePath: testConfig.basePath,
    browsers: Object.keys(customLaunchers),
    captureTimeout: 2400000,
    browserNoActivityTimeout: 2400000,
    colors: testConfig.colors,
    concurrency: 1,
    customLaunchers,
    exclude: testConfig.exclude,
    frameworks: testConfig.frameworks,
    port: testConfig.port,
    reporters: testConfig.reporters,
    singleRun: true
  });
};
