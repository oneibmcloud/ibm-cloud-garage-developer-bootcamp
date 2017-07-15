import td from 'testdouble';
import angular from 'angular';
import mocks from 'angular-mocks';
import ngMockHttp from 'ngMockHttp';

let context = require.context('./web', true, /\.spec\.js/);
context.keys().forEach(context);
