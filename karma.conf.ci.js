/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  config.set({
    junitReporter: {
      outputDir: 'generated'
    },

    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {test: /\.styl$/, loader: 'style!css!stylus'},
          {test: /\.css/, loader: 'style!css'},
          {test: /\.json$/, loader: 'json-loader' },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/web\/lib/, /node_modules/, /server/],
            query: {
              plugins: ['istanbul']
            }
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

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
          {type: 'lcov'},
          {type: 'text'}
      ]
    },

    autoWatch: false,
    autoWatchBatchDelay: 100,
    basePath: '',
    browsers: ['Firefox'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should', 'testdouble'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl', 'coverage', 'junit'],
    singleRun: true
  });
};
