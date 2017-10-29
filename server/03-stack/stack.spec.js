describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let makeStack = (capacity = 2) => {
    let queue = [];
    const isEmpty = () => queue.length === 0;
    if (capacity < 0) throw new Error('bad capacity error');

    const pop = () => {
      if (queue.length === 0 ) throw new Error('underflow error');
      return queue.pop();
    };

    const push = (element) => {
      if (queue.length === capacity) throw new Error('overflow error');
      queue.push(element);
    };

    const size = () => queue.length;

    return {
      isEmpty,
      pop,
      push,
      size
    };
  };

  describe('a stack', () => {
    let stack = null;
    beforeEach(() => {
      stack = makeStack();
    });

    it('starts empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('is not empty', () => {
      stack.push({});
      stack.isEmpty().should.be.false();
    });

    it('leaves stack size 1 when pushed', () => {
      stack.push();
      stack.size().should.equal(1);
    });

    it('leaves stack empty when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('overflows', () => {
      (() => { stack.push(); }).should.not.throw('overflow error');
      (() => { stack.push(); }).should.not.throw('overflow error');
      (() => { stack.push(); }).should.throw('overflow error');
    });

    it('underflows', () => {
      (() => { stack.pop(); }).should.throw('underflow error');
    });

    it('gets same one back when pushed then popped', () => {
      const element = {};
      stack.push(element);
      stack.pop().should.equal(element);
    });

    it('leaves stack empty when pushed twice and popped twice', () => {
      const element1 = {};
      const element2 = {};
      stack.size().should.equal(0);
      stack.push(element1);
      stack.size().should.equal(1);
      stack.push(element2);
      stack.size().should.equal(2);
      stack.pop().should.equal(element2);
      stack.size().should.equal(1);
      stack.pop().should.equal(element1);
      stack.isEmpty().should.be.true();
      stack.size().should.equal(0);
    });

    it('handles stack with negative size', () => {
      (() => { makeStack(-1); }).should.throw('bad capacity error');
    });
  });
});
