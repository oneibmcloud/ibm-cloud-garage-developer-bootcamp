/*eslint no-unused-vars: "off"*/
import angular from 'angular';

//noinspection JSUnresolvedVariable
import mocks from 'angular-mocks';

//noinspection JSUnresolvedVariable
import ngMockHttp from 'ngMockHttp';

let context = require.context('./web', true, /\.web.spec\.js/);
context.keys().forEach(context);
