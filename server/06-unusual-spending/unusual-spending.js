import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  const payments = fetch(userId);
  const categorized = categorize(payments);
  email(userId, categorized);
};

export {unusualSpending};
