import {realEmail} from './real-email';

const email = (userId, categorizedPayments) => {
  return realEmail(userId, categorizedPayments);
};

export {email};
