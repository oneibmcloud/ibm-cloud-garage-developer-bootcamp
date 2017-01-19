import {lineCount} from './line-count';

describe('the line-count-with-promise canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('line count can be checked', () => {
    const filespec = 'server/03-line-count-with-callback/line-count.js';

    it('with the done parameter like with callback', done => {
      const receiveCount = count => {
        count.should.equal(13);
        done();
      };

      lineCount(filespec).then(receiveCount);
    });

    it('by returning the promise after .then', () => {
      const receiveCount = count => {
        count.should.equal(13);
      };

      return lineCount(filespec).then(receiveCount);
    });

    it('by using eventually or fulfilledWith', () => {
      return lineCount(filespec).should.eventually.equal(13);
    });
  });
});
