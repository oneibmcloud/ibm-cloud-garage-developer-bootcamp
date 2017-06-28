/* eslint-disable no-empty */
/*eslint no-shadow: "off"*/
/*eslint no-unused-vars: "off"*/

import fs from 'fs';
import {List, Map} from 'immutable-ext';

import {Sum, All, First} from './functional-types';

describe('semi group', () => {
  const acct1 = Map({
    name: First('Nico'),
    isPaid: All(true),
    points: Sum(10),
    friends: ['Franklin']
  });

  const acct2 = Map({
    name: First('Nico'),
    isPaid: All(false),
    points: Sum(2),
    friends: ['Gatsby']
  });

  it('concatenates', () => {
    acct1.concat(acct2).toJS().should.deepEqual({
      name: First('Nico'),
      isPaid: All(false),
      points: Sum(12),
      friends: [ 'Franklin', 'Gatsby' ]
    });
  });
});
