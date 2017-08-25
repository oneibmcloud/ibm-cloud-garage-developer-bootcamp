describe.only('a palindrome function', () => {
  it('canary spec shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
  };

  it('is true for "mom"', () => {
    isPalindrome('mom').should.be.true();
  });

  it('is false for "daddy"', () => {
    isPalindrome('daddy').should.be.false();
  });

  it('is false for ""');
  it('is false for "     "');
  it('is true for "mom mom"');
  it('is false for "mom dad"');
});
