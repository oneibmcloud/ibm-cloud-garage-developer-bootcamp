import {makeCustomerFrom} from './makeCustomerFrom';
import {makeMovieFrom} from './makeMovieFrom';
import {makeRentalFrom} from './makeRentalFrom';
import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

describe('martin fowler\'s movie refactoring example', () => {
  const DAYS_RENTED_IS_1 = 1;
  const DAYS_RENTED_IS_2 = 2;
  const DAYS_RENTED_IS_3 = 3;

  let customer;

  let childrens1;
  let childrens2;
  let childrens3;

  let newRelease1;
  let newRelease2;
  let newRelease3;

  let regular1;
  let regular2;
  let regular3;

  beforeEach( () => {
    customer = makeCustomerFrom('Dummy Customer, Jr.');

    childrens1 = makeMovieFrom('Childrens1', CHILDRENS);
    childrens2 = makeMovieFrom('Childrens2', CHILDRENS);
    childrens3 = makeMovieFrom('Childrens3', CHILDRENS);

    newRelease1 = makeMovieFrom('New Release1', NEW_RELEASE);
    newRelease2 = makeMovieFrom('New Release2', NEW_RELEASE);
    newRelease3 = makeMovieFrom('New Release3', NEW_RELEASE);

    regular1 = makeMovieFrom('Regular1', REGULAR);
    regular2 = makeMovieFrom('Regular2', REGULAR);
    regular3 = makeMovieFrom('Regular3', REGULAR);
  });

  it('is protected from regressions', () => {
    let expected = 'Rental Record for Dummy Customer, Jr.\n' +
        '\tChildrens1\t1.5\n' +
        '\tChildrens2\t1.5\n' +
        '\tChildrens3\t1.5\n' +
        '\tRegular1\t2\n' +
        '\tRegular2\t2\n' +
        '\tRegular3\t3.5\n' +
        '\tNew Release1\t3\n' +
        '\tNew Release2\t6\n' +
        '\tNew Release3\t9\n' +
        'Amount owed is 30\n' +
        'You earned 11 frequent renter points';

    customer.addRental(makeRentalFrom(childrens1, DAYS_RENTED_IS_1));
    customer.addRental(makeRentalFrom(childrens2, DAYS_RENTED_IS_2));
    customer.addRental(makeRentalFrom(childrens3, DAYS_RENTED_IS_3));

    customer.addRental(makeRentalFrom(regular1, DAYS_RENTED_IS_1));
    customer.addRental(makeRentalFrom(regular2, DAYS_RENTED_IS_2));
    customer.addRental(makeRentalFrom(regular3, DAYS_RENTED_IS_3));

    customer.addRental(makeRentalFrom(newRelease1, DAYS_RENTED_IS_1));
    customer.addRental(makeRentalFrom(newRelease2, DAYS_RENTED_IS_2));
    customer.addRental(makeRentalFrom(newRelease3, DAYS_RENTED_IS_3));

    (expected).should.equal(customer.statement());
  });
});
