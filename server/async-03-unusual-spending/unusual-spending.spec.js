/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe('unusual spending should', () => {
  let fetch;
  let categorize;
  let email;
  let userId;

  beforeEach(() => {
    fetch = replace('./fetch')['fetch'];
    categorize = replace('./categorize')['categorize'];
    email = replace('./email')['email'];
    userId = {dummy: 'user id'};
  });

  it('call fetch then categorize then email', () => {
    const payments = {dummy: 'payments'};
    const categorizedPayments = {dummy: 'categorized payments'};

    when(fetch(userId)).thenResolve(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    let unusualSpending = require('./unusual-spending')['unusualSpending'];

    return unusualSpending(userId).then(() => {
      verify(email(userId, categorizedPayments));
    });
  });

  it('fail', () => {
    const dummyError = new Error('network error');

    when(fetch(userId)).thenReject(dummyError);

    let unusualSpending = require('./unusual-spending')['unusualSpending'];

    return unusualSpending(userId).catch((error) => {
      error.message.should.equal('fetch failed with error: network error');
    });
  });

  afterEach(() => {
    reset();
  });
});
