import R from 'ramda';
const {map, reduce, groupBy, prop, compose, toPairs} = R;

const categorize = payments => {
  const sumAmounts = (acc, value) => acc + value.amount;
  const subtotal = map(categorizedPayments => reduce(sumAmounts, 0, categorizedPayments));
  const groupByCategory = groupBy(prop('category'));
  const regroup = map((payment) => ({amount: payment[1], category: payment[0]}) );
  const categorizedPayments = compose(regroup, toPairs, subtotal, groupByCategory);

  const prettyPrint = map( payment => {
    return {month: payment.month, payments: categorizedPayments(payment.payments)};
  });

  return prettyPrint(payments);
};

export {categorize};
