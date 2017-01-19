describe('the palindrome canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const isPalindrome = phrase => {
    if (typeof phrase === 'undefined') throw new Error('no argument exception');

    return phrase.trim().length > 0 &&
        phrase.split('').reverse().join('') === phrase;
  };

  describe('palindrome should be', () => {
    it('yes for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('no for dude', () => {
      isPalindrome('dude').should.equal(false);
    });

    it('yes for mom mom', () => {
      isPalindrome('mom mom').should.be.true();
    });

    it('no for mom dad', () => {
      isPalindrome('mom dad').should.equal(false);
    });

    it('no for empty phrase', () => {
      isPalindrome('').should.equal(false);
    });

    it('no for whitespace only phrase', () => {
      isPalindrome('   ').should.equal(false);
    });

    it('no argument exception', () => {
      (() => { isPalindrome(); }).should.throw('no argument exception');
    });
  });
});
