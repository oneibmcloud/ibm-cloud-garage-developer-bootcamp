/* eslint-disable no-empty */
/*eslint no-shadow: "off"*/

import fs from 'fs';
import {List, Map} from 'immutable-ext';

import {Sum, All, First} from './functional-types';

describe('monoid', () => {
  const acct1 = Map({
    isPaid: All(true),
    points: Sum(10)
  });

  const acct2 = Map({
    isPaid: All(false),
    points: Sum(2)
  });

  it('reduces', () => {
    acct1.concat(acct2).reduce().should.equal({});
  });
});
