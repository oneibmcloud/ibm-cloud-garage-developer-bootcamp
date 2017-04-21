describe('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactorsOf = (number) => {
    const factors = [];
    if (number > 1) factors.push(2);
    return factors;
  };

  describe('a prime numbers function should', () => {
    it('return none for 1', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });

    it('return 2 for 2', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('return 3 for 3');

    it('return 2, 2 for 4');

    it('return 5 for 5');

    it('return 2, 3 for 6');

    it('return 7 for 7');

    it('return 2, 2, 2 for 8');

    it('return 3, 3 for 9');
  });
});
