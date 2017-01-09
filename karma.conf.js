var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/node_modules/, /server/],
            query: {
              plugins: ['istanbul']
            }
          },
        ]
      },
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false}
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
          {type: 'lcov'},
          {type: 'text'}
      ]
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
    browsers: ['Chrome'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl', 'coverage'],
    singleRun: false
  });
};
