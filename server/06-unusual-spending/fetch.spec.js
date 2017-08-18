import {replace, when} from '../../test-helper';

describe('fetch', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });

  it('orchestrates months and an api wrapper', () => {
    // arrange
    const months = replace('./months');
    const apiWrapper = replace('./apiWrapper').apiWrapper;

    when(months.prior()).thenReturn('prior-month');
    when(months.current()).thenReturn('current-month');

    const priorPayments = [];
    when(apiWrapper('user-id', 'prior-month')).thenReturn(priorPayments);
    const currentPayments = [];
    when(apiWrapper('user-id', 'current-month')).thenReturn(currentPayments);

    let fetch = require('./fetch').fetch;

    // act - act
    fetch('user-id').should.deepEqual([
      {month: 'prior-month', payments: priorPayments},
      {month: 'current-month', payments: currentPayments}
    ]);
  });
});
