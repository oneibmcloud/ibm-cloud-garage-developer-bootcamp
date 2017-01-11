const current = () => {
  const thisMonthDate = new Date();
  return {year: thisMonthDate.getFullYear(), month: thisMonthDate.getMonth() + 1};
};

const prior = () => {
  let buildLastMonthDateFrom = function (date) {
    let monthDate = new Date(date);
    monthDate.setMonth(monthDate.getMonth() - 1);
    return monthDate;
  };

  const lastMonthDate = buildLastMonthDateFrom(new Date());
  return {year: lastMonthDate.getFullYear(), month: lastMonthDate.getMonth() + 1};
};

export {current, prior};
