const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const moneyToFloat = s =>
  parseFloat(s.replace(/\$/g, ''));

const percentToFloat = s => {
  const replaced = s.replace(/%/g, '');
  const r = parseFloat(replaced);
  return r * 0.01;
};

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - cost * savings;
};

describe('next char for number string', () => {
  it('apply discount', () => {
    applyDiscount('$5.00', '20%').should.equal(4);
  });
});
