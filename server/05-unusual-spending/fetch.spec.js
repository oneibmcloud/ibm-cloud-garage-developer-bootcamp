import td from 'testdouble';

describe('fetch should', () => {
  it('interact with months', () => {
    const months = td.replace('./months');
    const fetch = require('./fetch').fetch;

    td.when(months.current());
    td.when(months.prior());

    fetch();

    td.verify(months.current());
    td.verify(months.prior());
  });

  it('call the API with this and last month', () => {
    const months = td.replace('./months');
    const api = td.replace('./api').api;
    const fetch = require('./fetch').fetch;
    const userId = 'fake-user-id';

    td.when(months.current()).thenReturn({year: 2016, month: 12});
    td.when(months.prior()).thenReturn({year: 2016, month: 11});

    td.when(api(userId, {year: 2016, month: 12})).thenResolve('dummy-current-months-payments');
    td.when(api(userId, {year: 2016, month: 11})).thenResolve('dummy-prior-months-payments');

    fetch(userId);

    return fetch(userId).should.eventually.deepEqual({
      'current-month': 'dummy-current-months-payments',
      'prior-month': 'dummy-prior-months-payments'
    });
  });
});
