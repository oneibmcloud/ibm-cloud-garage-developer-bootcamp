/*eslint dot-notation: "off"*/
/*eslint no-native-reassign: "off"*/
import {current, prior} from './months';

describe('months', () => {
  const realDate = Date;

  let fakeDate = function () {
    return function () {return new realDate('01/11/2017');};
  };

  beforeEach(() => {
    Date = fakeDate();
  });

  afterEach(() => {
    Date = realDate;
  });

  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('returns the current year and month', () => {
    current().should.deepEqual({year: 2017, month: 1});
  });

  it('returns the prior year and month', () => {
    prior().should.deepEqual({year: 2016, month: 12});
  });
});
