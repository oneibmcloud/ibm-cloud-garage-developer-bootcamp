describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function fahrenheit2celsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  describe('fahrenheit2celsius should', () => {
    it('', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('farenheit2celcius(50) is 10', () => {
      fahrenheit2celsius(50).should.equal(10);
    });
  });
});
