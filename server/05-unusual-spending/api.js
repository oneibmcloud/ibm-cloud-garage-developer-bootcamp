import {realApi} from './real-api';

const api = (userId, month) => {
  return realApi(userId, month);
};

export {api};
