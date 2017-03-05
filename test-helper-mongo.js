import {R, replace, when, verify} from './test-helper';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connection = mongoose.connection;
before( done => {
  mongoose.connect('mongodb://localhost/users_test');

  connection.on('error', error => {
    console.warn('error', error);
  });

  connection.once('open', () => done());
});

beforeEach(done => {
  connection.collections.users.drop(() => {
    done();
  });
});

export {connection, R, replace, when, verify};


