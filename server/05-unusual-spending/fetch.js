import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = current();
  const priorMonth = prior();

  const fetchCurrentMonth = api(userId, currentMonth);
  const fetchPriorMonth = api(userId, priorMonth);

  return Promise.all([fetchCurrentMonth, fetchPriorMonth]).then(payments => {
    return payments;
  });
};

export {fetch};
