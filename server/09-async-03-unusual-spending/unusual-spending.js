import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (id) => {
  const promise = fetch(id);

  promise.then((payments) => {
    const categorizedPayments = categorize(payments);
    email(id, categorizedPayments);
  });

  promise.catch((error) => {
    return Promise.reject(error.message);
  });

  return promise;
};

export {unusualSpending};
