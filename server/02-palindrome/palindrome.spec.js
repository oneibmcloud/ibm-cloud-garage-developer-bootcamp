describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      isPalindrome('racecar').should.be.true();
    });

    it('is not racecars', () => {
      isPalindrome('racecars').should.be.false();
    });

    it('is not race car');
    it('"   " is not a palindrome   ');
    it('"" is not a palindrome');
    it('is "mom dad mom"');
  });
});
