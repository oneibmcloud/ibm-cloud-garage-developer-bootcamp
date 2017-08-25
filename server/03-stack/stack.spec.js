describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let stackFactory = () => {
    let length = 0;
    const capacity = 2;

    const isEmpty = () => length === 0;
    const size = () => length;

    const pop = () => {
      if (isEmpty()) throw new Error('cannot pop an empty stack');
      length--;
    };

    const push = () => {
      if (length === capacity) throw new Error('exceeded capacity');
      length++;
    };

    return {
      isEmpty,
      pop,
      push,
      size
    };
  };

  let stack;

  describe('a stack should', () => {
    beforeEach(() => {
      stack = stackFactory();
    });

    it('underflow', () => {
      (() => {
        stack.pop();
      }).should.throw('cannot pop an empty stack');
    });

    it('overflow', () => {
      stack.push();
      stack.push();
      (() => {
        stack.push();
      }).should.throw('exceeded capacity');
    });

    it('leave stack size 0 when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.size().should.equal(0);
    });

    it('leave stack empty when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('leave stack size 1 when pushed', () => {
      stack.push();
      stack.size().should.equal(1);
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

    it('pop the same one pushed');

    it('pop the same two pushed');

    it('not have negative capacity');
  });
});
