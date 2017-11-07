/*eslint no-unused-vars: "off"*/
const testConfig = require('./make-webpack-test-config');

module.exports = function(config) {
  config.set(testConfig);
};
