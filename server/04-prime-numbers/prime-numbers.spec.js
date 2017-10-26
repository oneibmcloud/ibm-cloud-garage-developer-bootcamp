/* eslint-disable no-param-reassign */
describe('prime factors of', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactorsOf = (number) => {
    const factors = [];

    for (let prime = 2; number > 1; prime++) {
      for (; number % prime === 0; number /= prime) factors.push(prime);
    }
    return factors;
  };

  it('1 is none', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('2 is 2', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('3 is 3', () => {
    primeFactorsOf(3).should.deepEqual([3]);

  });
  it('4 is 2, 2', () => {
    primeFactorsOf(4).should.deepEqual([2, 2]);

  });
  it('5 is 5', () => {
    primeFactorsOf(5).should.deepEqual([5]);
  });

  it('6 is 2, 3', () => {
    primeFactorsOf(6).should.deepEqual([2, 3]);
  });

  it('7 is 7', () => {
    primeFactorsOf(7).should.deepEqual([7]);
  });

  it('8 is 2, 2, 2', () => {
    primeFactorsOf(8).should.deepEqual([2, 2, 2]);
  });

  it('9 is 3, 3', () => {
    primeFactorsOf(9).should.deepEqual([3, 3]);
  });
});
