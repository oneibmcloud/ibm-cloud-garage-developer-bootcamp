require('testdouble');
require('angular');
require('angular-mocks');
require('ngMockHttp');

let context = require.context('./web', true, /\.spec\.js/);
context.keys().forEach(context);
