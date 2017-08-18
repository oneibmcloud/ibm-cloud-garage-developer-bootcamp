import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });

  it('orchestrates the happy path for fetch, categorize and email', () => {
    // arrange
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    when(fetch('id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized-payments');

    let unusualSpending = require('./unusual-spending').unusualSpending;

    // act
    return unusualSpending('id').then(() => {
      // assert
      verify(email('id', 'categorized-payments'));
    });
  });

  it('orchestrates the sad path for fetch, categorize and email', () => {
    // arrange
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;

    const error = new Error('fetch be broke');

    when(fetch('id')).thenReject(error);
    when(categorize('payments')).thenReturn('categorized-payments');

    let unusualSpending = require('./unusual-spending').unusualSpending;

    // arrange
    return unusualSpending('id').catch((message) => {
      // act
      message.should.equal('fetch be broke');
    });
  });
});
