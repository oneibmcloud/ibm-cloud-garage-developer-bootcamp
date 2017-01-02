describe('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('fahrenheit2celsius should', () => {
    const fahrenheit2celsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

    it('give 0°C for 32°F', () => {
      const expected = fahrenheit2celsius(32);
      expected.should.equal(0);
    });

    it('give 10°C for 50°F', () => {
      const expected = fahrenheit2celsius(50);
      expected.should.equal(10);
    });
  });
});
