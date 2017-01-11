/*eslint dot-notation: "off"*/
import {replace, when} from '../../test-helper';

describe('fetch should', () => {
  it('call the API with this and last month', () => {
    const monthsDouble = replace('./months');
    const apiDouble = replace('./api')['api'];

    const fetch = require('./fetch').fetch;

    when(monthsDouble.current()).thenReturn({year: 2016, month: 12});
    when(monthsDouble.prior()).thenReturn({year: 2016, month: 11});

    when(apiDouble('dummy-user-id', {year: 2016, month: 12})).thenResolve(
        'dummy-current-months-payments');

    when(apiDouble('dummy-user-id', {year: 2016, month: 11})).thenResolve(
        'dummy-prior-months-payments');

    return fetch('dummy-user-id').should.eventually.deepEqual({
      'current-month': 'dummy-current-months-payments',
      'prior-month': 'dummy-prior-months-payments'
    });
  });
});
