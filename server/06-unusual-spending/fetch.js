import * as months from './months';
import {api} from './api-wrapper';

export const fetch = (id) => {
  const current = months.current();
  const prior = months.prior();

  return {
    current: {
      month: current,
      payments: api(id, current)
    },
    prior: {
      month: prior,
      payments: api(id, prior)
    }
  };
};
