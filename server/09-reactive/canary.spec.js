import Rx from 'rxjs/Rx';
import console from 'better-console';

let separate = function() {
  console.log('');
  console.log('  __________________');
  console.log('');
};

describe('rxjs', () => {
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

  it('observers are lazy: execute only if necessary', (done) => {
    separate();

    const publisher = Rx.Observable.create(observer => {
      const id = setTimeout(() => {
        console.log('    timeout hit');
        observer.error(new Error('my bad'));
        observer.next(42);
        observer.complete();
        done();
      }, 1000);

      console.log('    timeout started');

      return () => {
        console.log('    disposal called');
        clearTimeout(id);
        done();
      };
    });

    const subscriber = publisher.subscribe(x => {
      console.log('    success handler called: ' + x);
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.info('    complete handler called');
    });


    setTimeout(() => {
      console.info('    un-subscribe');
      subscriber.unsubscribe();
    }, 500);
  });

  it('acts like asynchronous arrays', (done) => {
    separate();

    const source = Rx.Observable.interval(300).take(6);

    source.filter(x => x % 2 === 1)
    .map(x => x + '!')
    .forEach(x => {
      console.info(x);
      if (x === '5!') done();
    });
  });

});
