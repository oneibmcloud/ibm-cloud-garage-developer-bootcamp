import {lineCount} from './line-count';

describe('line count', () => {
  it('for file —— line-count.js —— should be 13', (done) => {

    function onSuccess(lines) {
      lines.should.equal(13);
      done();
    }

    lineCount(
      'server/07-async-01-line-count-with-callback/line-count.js',
      null,
      onSuccess
    );
  });

  it('for file —— is-not-there.js —— ' +
      'should be problem reading file: ' +
      'is-not-there.js', (done) => {

    function onError(errorMessage) {
      errorMessage.should.equal(
        'problem reading file: is-not-there.js');

      done();
    }

    lineCount(
        'is-not-there.js',
        onError,
        null
    );
  });
});
