describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = (capacity = 2) => {
    if (capacity < 0) throw new Error('Error: negative capacity.');
    const queue = [];
    let size = 0;

    return {
      pop: () => {
        if (size === 0) throw new Error('Error: underflow.');
        size--;
        return queue.pop();
      },

      push: (element) => {
        if (size === capacity) throw new Error('Error: overflow.');
        queue.push(element);
        size++;
      },

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

    it('leave stack size 0 when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.size().should.equal(0);
    });

    it('overflow', () => {
      stack.push();
      stack.push();

      (() => {
        stack.push();
      }).should.throw('Error: overflow.');
    });

    it('underflow', () => {
      stack.push();
      stack.push();
      stack.pop();
      stack.pop();

      (() => {
        stack.pop();
      }).should.throw('Error: underflow.');
    });

    it('pop the same one pushed', () => {
      const element = {};
      stack.push(element);
      stack.pop().should.equal(element);
    });

    it('pop the same two pushed', () => {
      const element1 = {};
      const element2 = {};
      stack.push(element1);
      stack.push(element2);

      stack.pop().should.equal(element2);
      stack.pop().should.equal(element1);
    });

    it('negative capacity', () => {
      (() => {
        stack = makeStack(-1);
      }).should.throw('Error: negative capacity.');
    });
  });
}
);
