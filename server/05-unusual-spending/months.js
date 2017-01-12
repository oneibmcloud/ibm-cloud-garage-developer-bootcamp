const current = () => {
  const thisMonthDate = new Date();
  return {year: thisMonthDate.getFullYear(), month: thisMonthDate.getMonth() + 1};
};

const prior = () => {
  let buildLastMonthDateFrom = function (date) {
    let mutableMonthDate = new Date(date);
    mutableMonthDate.setMonth(mutableMonthDate.getMonth() - 1);
    return mutableMonthDate;
  };

  const lastMonthDate = buildLastMonthDateFrom(new Date());
  return {year: lastMonthDate.getFullYear(), month: lastMonthDate.getMonth() + 1};
};

export {current, prior};
