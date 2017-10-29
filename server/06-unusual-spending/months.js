const current = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  };
};

const prior = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth()
  };
};

export {current, prior};
