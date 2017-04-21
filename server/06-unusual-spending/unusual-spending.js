import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

export const unusualSpending = (id) => {
  const payments = fetch(id);
  const categorized = categorize(payments);
  return email(id, categorized);
};
