import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = userId => {
  return fetch(userId).then(payments => {
    email(userId, categorize(payments));
  });
};
export {unusualSpending};
