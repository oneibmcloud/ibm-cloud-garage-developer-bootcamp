//http://tonylukasavage.com/blog/2014/05/29/custom-assertions-in-should-dot-js

//noinspection JSUnresolvedVariable
import mocha from 'mocha';

//noinspection JSUnresolvedVariable
import should from 'should';

import R from 'ramda';
import td from 'testdouble';

global.context = describe;
global.td = td;

afterEach(() => {
  td.reset();
});

export {mocha, should, R, td};
