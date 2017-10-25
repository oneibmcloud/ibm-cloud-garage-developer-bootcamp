/* eslint-disable no-param-reassign */
describe.only('prime factors of', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactorsOf = (number) => {
    if (number > 1) return [2];
    return [];
  };

  it('1 is none', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('2 is 2', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('3 is 3');
  it('4 is 2, 2');
  it('5 is 5');
  it('6 is 2, 3');
  it('7 is 7');
  it('8 is 2, 2, 2');
  it('9 is 3, 3');
});
