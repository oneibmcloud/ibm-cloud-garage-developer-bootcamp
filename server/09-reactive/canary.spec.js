import Rx from 'rxjs/Rx';

describe.only('rxjs', () => {

  it('observer.next(42)', (done) => {
    let publisher = Rx.Observable.create(observer => {
      observer.next(42);
      observer.complete();
    });

    publisher.subscribe(x => {
      console.log('  next resolves in success handler: ' + x);
      x.should.equal(42);
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.info('  done resolves in complete handler');
      done();
    });
  });
});
