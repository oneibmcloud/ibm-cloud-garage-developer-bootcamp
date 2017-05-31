/*eslint no-shadow: "off"*/

import {fromNullable} from './functional-types';

describe('concat unique', () => {
  describe('imperative', () => {
    const concatUniq = (x, ys) => {
      const isFound = ys.filter(y => y === x)[0];
      return isFound ? ys : ys.concat(x);
    };

    it('concatenates', () => {
      const x = {};
      const ys = [1, 2];
      const expected = [1, 2, x];

      concatUniq(x, ys).should.deepEqual(expected);
    });

    it('does not concatenates', () => {
      const x = {};
      const ys = [1, 2, x];

      concatUniq(x, ys).should.deepEqual(ys);
    });
  });
});
