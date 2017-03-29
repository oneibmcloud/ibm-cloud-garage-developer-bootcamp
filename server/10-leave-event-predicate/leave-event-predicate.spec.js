import moment from 'moment';
import R from 'ramda';
const {groupBy, keys} = R;

describe('the leave-event-predicate canary test', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });
});

function createLeaveEventPredicateFor(todaysDate) {
  return (leaveEvent) => {
    const periodEnd = moment(todaysDate).add(3, 'months').startOf('month');
    const eventStart = moment(leaveEvent.startDate);

    return eventStart.isBetween(moment(todaysDate), periodEnd) &&
        leaveEvent.state !== 'rejected';
  };
}

describe('the three month view', () => {
  describe('event predicate', () => {
    const september5thPredicate = createLeaveEventPredicateFor(new Date('2016-09-05'));

    it('excludes events begun in the past', () => {
      september5thPredicate({
        startDate: '2016-08-29',
        endDate: '2016-09-04'
      }).should.be.false();
    });

    it('includes events within 3 months range', () => {
      september5thPredicate({
        startDate: '2016-11-30',
        endDate: '4569-12-15'
      }).should.be.true();
    });

    it('excludes events begun more than 3 months away', () => {
      september5thPredicate({
        startDate: '2016-12-02',
        endDate: '2016-12-05'
      }).should.be.false();
    });

    it('excludes rejected events', () => {
      september5thPredicate({
        startDate: '2016-10-02',
        endDate: '2016-10-05',
        state: 'rejected'
      }).should.be.false();
    });
  });
});

const groupEventsIntoMonths = groupBy(e => moment(e.startDate).format('MMMM'));

describe('event grouper', () => {
  context('when passed any empty array of events', () => {
    it('returns an empty object', () => {
      groupEventsIntoMonths([]).should.deepEqual({});
    });
  });

  context('when passed an array of events', () => {
    const events = [
      {startDate: '2016-09-05'},
      {startDate: '2016-09-08'},
      {startDate: '2016-10-12'}
    ];

    it('creates a group for each month', () => {
      keys(groupEventsIntoMonths(events)).should.deepEqual(['September', 'October']);
    });

    it('puts the september events in the September entry', () => {
      groupEventsIntoMonths(events).September.should.deepEqual([
        {startDate: '2016-09-05'},
        {startDate: '2016-09-08'}
      ]);
    });

    it('puts the october event in the October entry', () => {
      groupEventsIntoMonths(events).October.should.deepEqual([
          {startDate: '2016-10-12'}
      ]);
    });
  });
});
