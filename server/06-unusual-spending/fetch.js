import * as months from './months';
import {api} from './api-wrapper';

export const fetch = (id) => {
  const current = months.current();
  const prior = months.prior();
  const currentPayments = api(id, current);
  const priorPayments = api(id, prior);

  return {
    current: {
      month: current,
      payments: currentPayments
    },
    prior: {
      month: prior,
      payments: priorPayments
    }
  };
};
