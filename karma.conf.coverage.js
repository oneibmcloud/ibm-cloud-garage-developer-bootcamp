/*eslint no-unused-vars: "off"*/
process.env.BABEL_ENV = 'test';
const testConfig = require('./make-webpack-test-config');

testConfig.coverageReporter = {
  dir: 'coverage/',
  reporters: [
      {type: 'lcov'},
      {type: 'json'},
      {type: 'text-summary'}
  ]
};

testConfig.reporters.push('coverage');

module.exports = function(config) {
  config.set(testConfig);
};
