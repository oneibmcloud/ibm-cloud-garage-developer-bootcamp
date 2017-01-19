import {lineCount} from './line-count';

describe('the server-callbacks canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('line count', () => {
    it('for file —— line-count.js —— should be 13', done => {
      const receiveLineCount = numberOfLines => {
        numberOfLines.should.equal(13);
        done();
      };

      lineCount('server/03-line-count-with-callback/line-count.js', null, receiveLineCount);
    });

    it('for file —— is-not-there.js —— should be problem reading file: is-not-there.js', done => {
      const receiveError = message => {
        message.should.equal('problem reading file: is-not-there.js');
        done();
      };

      lineCount('is-not-there.js', receiveError);
    });
  });
});
