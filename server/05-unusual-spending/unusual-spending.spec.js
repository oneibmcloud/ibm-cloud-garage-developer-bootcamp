/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending should', () => {
  it('interact with fetch, high-spending and email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('user-id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized-payments');

    unusualSpending = require('./unusual-spending').unusualSpending;

    const receiveCategorizedPayments = () => {
      verify(email('user-id', 'categorized-payments'));
    };

    return unusualSpending('user-id').then(receiveCategorizedPayments);
  });
});
