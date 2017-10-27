import {replace, when, verify} from '../../test-helper';

describe.only('fetch', () => {
  it('canary spec passes', () => {
    true.should.be.true();
  });

  it('orchestrates fetch and api, and returns payments', () => {
    // arrange
    const months = replace('./months');
    const apiWrapper = replace('./api-wrapper').apiWrapper;

    const currentMonth = {month: 'currentMonth'};
    const priorMonth = {month: 'priorMonth'};
    const userId = {};
    const currentMonthPayments = ['currentMonthsPayments'];
    const priorMonthPayments = ['priorMonthsPayments'];

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);

    when(apiWrapper(userId, currentMonth)).thenReturn(currentMonthPayments);
    when(apiWrapper(userId, priorMonth)).thenReturn(priorMonthPayments);

    const fetch = require('./fetch').fetch;

    // act
    const payments = fetch(userId);

    //assert
    payments.should.deepEqual({
      current: currentMonthPayments,
      prior: priorMonthPayments
    });
  });
});
