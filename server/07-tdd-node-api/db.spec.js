import db from './db';

describe('persistence to the database', () => {
  describe('canary test', () => {
    it('shows the spec infrastructure works', () => {
      true.should.be.true();
    });

    describe('db', () => {
      it('get returns no connection (null)', () => {
        (db.connection === null).should.be.true();
      });

      it('close sets connection off', () => {
        db.close();
        (db.connection === null).should.be.true();
      });

      it('close turns existing connection off', (done) => {
        (db.connection === null).should.be.true();
        db.connection = {close: () => {done();}};
        db.close();
        (db.connection === null).should.be.true();
      });

      it('connect set connection to good db', () => {

      });

      it('connect throws error when bad db');
    });
    describe('task', () => {
      it('all returns task collection');
      it('get returns a task');
      it('get returns empty for bad id');
      it('add adds a task');
      it('add throws error for bad task');
      it('delete deletes a task');
      it('delete throws error for bad task');
    });
  });
});
