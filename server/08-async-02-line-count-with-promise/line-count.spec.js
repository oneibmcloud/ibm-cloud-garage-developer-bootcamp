import {lineCount} from './line-count';

const filespec =
  'server/08-async-02-line-count-with-promise/line-count.js';

describe('line count can be checked', () => {
  it('with the done parameter like with a callback', (done) => {
    function onSuccess(lines) {
      lines.should.equal(17);
      done();
    }

    lineCount(filespec).then(onSuccess);
  });

  //does not return
  it('by returning the promise after .then', () => {
    function onSuccess(lines) {
      lines.should.equal(17);
    }

    return lineCount(filespec).then(onSuccess);
  });

  //return
  it('by using eventually or fulfilledWith', () => {
    return lineCount(filespec).should.eventually.equal(17);
  });
});
