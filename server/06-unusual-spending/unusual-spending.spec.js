import {replace, when, verify} from '../../test-helper';

describe('unusual spending', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('orchestrates the collaboration between fetch, categorize and email', () => {
    // arrange
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    const userId = {};
    const payments = {};
    const categorized = {};

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorized);

    let unusualSpending = require('./unusual-spending').unusualSpending;

    // act
    unusualSpending(userId);

    //assert
    verify(email(userId, categorized));
  });

});
