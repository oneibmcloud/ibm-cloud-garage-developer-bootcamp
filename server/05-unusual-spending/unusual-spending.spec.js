/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending should', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('interact with fetch, high-spending and email', () => {
    const fetchDouble = replace('./fetch')['fetch'];
    const categorizeDouble = replace('./categorize')['categorize'];
    const emailDouble = replace('./email')['email'];

    let unusualSpending;

    when(fetchDouble('user-id')).thenResolve('payments');
    when(categorizeDouble('payments')).thenReturn('categorized-payments');

    unusualSpending = require('./unusual-spending').unusualSpending;

    const receiveCategorizedPayments = () => {
      verify(emailDouble('user-id', 'categorized-payments'));
    };

    return unusualSpending('user-id').then(receiveCategorizedPayments);
  });
});
