describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = () => {
    let size = 0;

    return {
      pop: () => {},
      push: () => size++,
      isEmpty: () => size === 0,
      size: () => size
    };
  };

  let stack;

  describe('a stack should', () => {
    beforeEach(() => {
      stack = makeStack();
    });

    it('start empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('start with stack size 0', () => {
      stack.size().should.equal(0);
    });

    it('not be empty when pushed', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });

    it('leave stack size 1 when pushed', () => {
      stack.push();
      stack.size().should.equal(1);
    });

    it('leave stack empty when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('leave stack size 0 when pushed and popped');

    it('overflow');

    it('underflow');

    it('pop the same one pushed');

    it('pop the same two pushed');

    it('accept only positive capacity');
  });
}
);
