import payments from './payments-fake-data';

let count = 0;

const realApi = (userId, month) => {
  return new Promise(resolve => {
    resolve({
      month: month,
      payments: payments[count % 2]
    });
  });
};

export {realApi};
