/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe('unusual spending', () => {
  it('should call fetch then categorize then email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    const userId = {dummy: 'user id'};
    const payments = {dummy: 'payments'};
    const categorizedPayments = {dummy: 'categorized payments'};

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    let unusualSpending = require('./unusual-spending')['unusualSpending'];
    unusualSpending(userId);

    verify(email(userId, categorizedPayments));
  });

  afterEach(() => {
    reset();
  });
});
