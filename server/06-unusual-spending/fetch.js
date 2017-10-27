import * as months from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {
  const priorMonth = months.prior();
  const currentMonth = months.current();
  const priorMonthPayments = apiWrapper(userId, priorMonth);
  const currentMonthPayments = apiWrapper(userId, currentMonth);

  return {
    current: currentMonthPayments,
    prior: priorMonthPayments
  };
};

export {fetch};
