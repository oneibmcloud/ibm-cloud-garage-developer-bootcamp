import {fetchLocation} from './fetch-location';

describe('the fetch-location canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('fetch location should', () => {
    it('retrieve the latitude and longitude', function(done) {
      const onSuccess = location => {
        window.console.log(location);
        location.should.have.property('lat');
        location.should.have.property('long');
        done();
      };
      this.timeout(10000);
      fetchLocation(onSuccess);
    });
  });
});
