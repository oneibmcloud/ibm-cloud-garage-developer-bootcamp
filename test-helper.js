//http://tonylukasavage.com/blog/2014/05/29/custom-assertions-in-should-dot-js

//noinspection JSUnresolvedVariable
import should from 'should';

import R from 'ramda';
import td from 'testdouble';

const replace = td.replace;
const when = td.when;
const verify = td.verify;
const reset = td.reset;

td.config({
  promiseConstructor: require('bluebird')
});

global.context = describe;
global.td = td;

afterEach(() => {
  reset();
});

export {R, replace, when, verify, reset};
