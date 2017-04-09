import Rx from 'rxjs/Rx';

let separate = function() {
  console.log('');
  console.log('  __________________');
  console.log('');
};

describe.only('rxjs', () => {
  it('happy path: observer.next(42)', (done) => {
    separate();
    let publisher = Rx.Observable.create(observer => {
      observer.next(42);
      observer.complete();
    });

    publisher.subscribe(x => {
      console.log('    success handler called: ' + x);
      x.should.equal(42);
    },
    (error) => {
      console.info(error);
    },
    () => {
      console.info('    complete handler called');
      done();
    });
  });
});
