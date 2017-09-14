/*eslint no-shadow: "off"*/

import {Box} from './functional-types';

const moneyToFloat = s =>
 Box(s.replace(/\$/g, ''))
 .map(s => parseFloat(s));

const percentToFloat = s =>
 Box(s.replace(/&/g, ''))
 .map(s => parseFloat(s))
 .map(r => r * 0.01);

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
  percentToFloat(discount)
  .fold(savings =>
  cost - cost * savings));

describe('nested composition with box', () => {
  it('apply discount', () => {
    applyDiscount('$5.00', '20%').should.equal(4);
  });
});
