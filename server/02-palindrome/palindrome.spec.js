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

    it('true for mom mom', () => {
      isPalindrome('mom mom').should.be.true();
    });

    it('false for dad mom', () => {
      isPalindrome('dad mom').should.be.false();
    });

    it('true for whitespace', () => {
      isPalindrome('').should.be.true();
      isPalindrome(' ').should.be.true();
      isPalindrome('     ').should.be.true();
    });

    it('error for empty string');
    it('error for not a string');
  });
});
