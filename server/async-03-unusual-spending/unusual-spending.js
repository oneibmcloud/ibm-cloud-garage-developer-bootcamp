import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

export const unusualSpending = (id) => {
  return fetch(id).then(payments => {
    email(id, categorize(payments));
  }).catch(error => {
    return new Error('fetch failed with error: ' + error.message);
  });
};
