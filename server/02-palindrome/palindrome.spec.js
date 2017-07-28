describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(phrase) {
    if (phrase.trim().length === 0) return false;
    return phrase === phrase.split('').reverse().join('');
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      isPalindrome('racecar').should.be.true();
    });

    it('is not racecars', () => {
      isPalindrome('racecars').should.be.false();
    });

    it('is not race car', () => {
      isPalindrome('race car').should.be.false();
    });

    it('"   " is not a palindrome   ', () => {
      isPalindrome('   ').should.be.false();
    });

    it('"" is not a palindrome', () => {
      isPalindrome('').should.be.false();
    });

    it('is "mom dad mom"', () => {
      isPalindrome('mom dad mom').should.be.true();
    });
  });
});
