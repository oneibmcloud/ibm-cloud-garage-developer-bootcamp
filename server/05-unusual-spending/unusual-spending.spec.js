import td from 'testdouble';

describe('unusual spending should', () => {
  it('interact with fetch, high-spending and email', () => {
    const fetch = td.replace('./fetch').fetch;
    const categorize = td.replace('./categorize').categorize;
    const email = td.replace('./email').email;

    let unusualSpending;

    td.when(fetch('dummy-user-id')).thenResolve('dummy-payments-response');

    td.when(categorize('dummy-payments-response')).thenReturn(
        'dummy-categorized-payments');

    unusualSpending = require('./unusual-spending').unusualSpending;

    const receiveCategorizedPayments = () => {
      td.verify(email('dummy-user-id', 'dummy-categorized-payments'));
    };

    return unusualSpending('dummy-user-id').then(receiveCategorizedPayments);
  });
});
