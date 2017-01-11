/*eslint dot-notation: "off"*/
/*eslint no-native-reassign: "off"*/
import {current, prior} from './months';

describe('months should', () => {
  let savedDate = Date;

  beforeEach(() => {
    Date = function() {return new savedDate('01/11/2017');};
  });

  afterEach(() => {
    Date = savedDate;
  });

  it('return the current year and month', () => {
    current().should.deepEqual({year: 2017, month: 1});
  });

  it('return the prior year and month', () => {
    prior().should.deepEqual({year: 2016, month: 12});
  });
});
