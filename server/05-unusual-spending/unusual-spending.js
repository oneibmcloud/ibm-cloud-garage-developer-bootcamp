import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = userId => {
  return fetch(userId).then(payments => {
    const categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  });
};
export {unusualSpending};
