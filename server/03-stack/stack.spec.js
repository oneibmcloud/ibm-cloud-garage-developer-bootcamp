describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = () => {
    return {
      isEmpty: () => true,
      size: () => 0
    };
  };

  const stack = {
    isEmpty: () => true,
    size: () => 0
  };

  describe('a stack should', () => {
    it('start empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('start with stack size 0', () => {
      stack.size().should.equal(0);
    });

    it('not be empty when pushed');

    it('leave stack size 1 when pushed');

    it('leave stack empty when pushed and popped');

    it('leave stack size 0 when pushed and popped');

    it('overflow');

    it('underflow');

    it('pop the same one pushed');

    it('pop the same two pushed');

    it('accept only positive capacity');
  });
}
);
