/*eslint dot-notation: "off"*/
import {replace, when} from '../../test-helper';

describe('fetch', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('calls the API with current and prior months', () => {
    const currentMonth = {year: 2016, month: 12};
    const priorMonth = {year: 2016, month: 11};

    const currentMonthPayments = {month: currentMonth, payments: ['current']};
    const priorMonthPayments = {month: priorMonth, payments: ['prior']};

    const monthsDouble = replace('./months');
    const apiDouble = replace('./api')['api'];
    const fetch = require('./fetch').fetch;

    when(monthsDouble.current()).thenReturn(currentMonth);
    when(monthsDouble.prior()).thenReturn(priorMonth);

    when(apiDouble('user-id', currentMonth)).thenResolve(currentMonthPayments);
    when(apiDouble('user-id', priorMonth)).thenResolve(priorMonthPayments);

    return fetch('user-id').should.eventually.deepEqual([currentMonthPayments, priorMonthPayments]);
  });
});
