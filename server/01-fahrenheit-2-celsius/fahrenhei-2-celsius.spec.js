describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  describe('fahrenheit2celsius', () => {
    it('32F <=> 0C', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('50f <=> 10C', () => {
      fahrenheit2celsius(50).should.equal(10);
    });
  });
});
