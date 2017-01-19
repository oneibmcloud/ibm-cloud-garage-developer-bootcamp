import {payments, categorizedPayments, currentMonth, priorMonth} from './payments-fake-data';
import {categorize} from './categorize';

describe('categorize', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('groups the payments by month and category', () => {
    categorize([
      {month: currentMonth, payments: payments[0]},
      {month: priorMonth, payments: payments[1]}
    ]).should.deepEqual(categorizedPayments);
  });
});
