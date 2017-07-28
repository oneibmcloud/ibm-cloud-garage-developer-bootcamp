describe.only('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function fahrenheit2celsius() {
    return 32;
  }

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(0).should.equal(32);
    });

    it('give 10°C for 50°F');
  });
});
