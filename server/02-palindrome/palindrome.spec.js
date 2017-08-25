describe('a palindrome function', () => {
  it('canary spec shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (phrase) => {  // "mom mom"
    if (phrase.trim().length === 0) return false;
    return phrase === phrase.split('').reverse().join('');
  };

  it('is true for "mom"', () => {
    isPalindrome('mom').should.be.true();
  });

  it('is false for "daddy"', () => {
    isPalindrome('daddy').should.be.false();
  });

  it('is false for ""', () => {
    isPalindrome('').should.be.false();
  });

  it('is false for "     "', () => {
    isPalindrome('    ').should.be.false();
  });

  it('is true for "mom mom"', () => {
    isPalindrome('mom mom').should.be.true();
  });

  it('is false for "mom dad"', () => {
    isPalindrome('mom dad').should.be.false();
  });
});
