import {replace, when, verify} from '../../test-helper';

describe('unusual spending', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });

  it('orchestrates fetch, categorize and email', () => {
    // arrange
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    when(fetch('id')).thenReturn('payments');
    when(categorize('payments')).thenReturn('categorized-payments');

    let unusualSpending = require('./unusual-spending').unusualSpending;

    // act
    unusualSpending('id');

    // assert
    verify(email('id', 'categorized-payments'));
  });
});
