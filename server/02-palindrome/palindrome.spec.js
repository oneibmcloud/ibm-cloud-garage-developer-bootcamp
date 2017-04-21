describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
  };

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude', () => {
      isPalindrome('dude').should.be.false();
    });

    it('true for mom mom');
    it('false for dad mom');
    it('true for whitespaces');
    it('error for empty string');
    it('error for not a string');
  });
});
