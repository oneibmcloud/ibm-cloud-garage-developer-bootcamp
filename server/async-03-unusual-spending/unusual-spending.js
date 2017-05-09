import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

export const unusualSpending = (id) => {
  return new Promise((resolve, reject) => {
    fetch(id).then(payments => {
      resolve(email(id, categorize(payments)));
    }).catch(error => {
      reject(new Error('fetch failed with error: ' + error.message));
    });
  });
};
