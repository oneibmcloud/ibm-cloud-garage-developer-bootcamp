describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (phrase) => {
    if (typeof phrase !== 'string') throw new Error('Error: please pass a string.');
    if (phrase === '') throw new Error('Error: please pass a non-empty string.');

    return phrase === phrase.split('').reverse().join('');
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
      isPalindrome(' ').should.be.true();
      isPalindrome('     ').should.be.true();
    });

    it('error for empty string', () => {
      (() => {
        isPalindrome('');
      }).should.throw('Error: please pass a non-empty string.');
    });

    it('error for not a string', () => {
      (() => {
        isPalindrome();
      }).should.throw('Error: please pass a string.');
    });
  });
});
