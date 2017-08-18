import * as months from './months';
import {apiWrapper} from './apiWrapper';

const fetch = (id) => {
  const prior = months.prior();
  const current = months.current();
  const currentPayments = apiWrapper(id, current);
  const priorPayments = apiWrapper(id, prior);

  return [
    {month: prior, payments: priorPayments},
    {month: current, payments: currentPayments}
  ];
};

export {fetch};
