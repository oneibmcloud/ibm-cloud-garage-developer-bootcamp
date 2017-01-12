import payments from './payments';

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
