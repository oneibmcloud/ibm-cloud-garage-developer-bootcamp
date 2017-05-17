/*eslint dot-notation: "off"*/
import {replace, when, reset} from '../../test-helper';

describe('fetch', () => {
  it('should call months twice and api twice', () => {
    const months = replace('./months');
    const api = replace('./api-wrapper')['api'];

    const userId = {dummy: 'user id'};
    const prior = {dummy: 'prior month'};
    const current = {dummy: 'current month'};
    const priorPayments = {dummy: 'prior month\'s payments'};
    const currentPayments = {dummy: 'current month\'s payments'};

    when(months.prior()).thenReturn(prior);
    when(months.current()).thenReturn(current);
    when(api(userId, prior)).thenReturn(priorPayments);
    when(api(userId, current)).thenReturn(currentPayments);

    let fetch = require('./fetch')['fetch'];

    fetch(userId).should.deepEqual({
      current: {
        month: current,
        payments: currentPayments
      },
      prior: {
        month: prior,
        payments: priorPayments
      }
    });
  });

  afterEach(() => {
    reset();
  });
});
