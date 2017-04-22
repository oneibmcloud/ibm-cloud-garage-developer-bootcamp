/*eslint dot-notation: "off"*/
import {replace, when, verify, reset} from '../../test-helper';

describe('fetch', () => {
  it('should call months twice and api twice', () => {
    const months = replace('./months');
    const api = replace('./api-wrapper')['api'];

    const userId = {dummy: 'user id'};
    const priorMonth = {dummy: 'prior month'};
    const currentMonth = {dummy: 'current month'};
    const priorPayments = {dummy: 'prior month\'s payments'};
    const currentPayments = {dummy: 'current month\'s payments'};

    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);
    when(api(userId, priorMonth)).thenReturn(priorPayments);
    when(api(userId, currentMonth)).thenReturn(currentPayments);

    let fetch = require('./fetch')['fetch'];

    fetch(userId).should.deepEqual({
      current: {
        month: currentMonth,
        payments: currentPayments
      },
      prior: {
        month: priorMonth,
        payments: priorPayments
      }
    });
  });

  afterEach(() => {
    reset();
  });
});
