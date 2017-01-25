import {Right, Left} from './functional-types';
/*eslint no-shadow: "off"*/

describe('either example collection', () => {
  describe('street names', () => {
    const user = {address: null};
    const address = {street: null};
    const street = {name: null};

    const streetName = user => {
      const address = user.address;

      if (address) {
        const street = address.street;
        if (street) return street.name;
      }
      return 'no street';
    };

    describe('imperative', () => {
      it('user has no address', () => {
        user.address = null;
        streetName(user).should.equal('no street');
      });

      it('address has no street', () => {
        address.street = null;
        user.address = address;
        streetName(user).should.equal('no street');
      });

      it('street has no name', () => {
        street.name = null;
        address.street = street;
        user.address = address;
        (streetName(user) === null).should.be.true();
      });

      it('street has a name', () => {
        street.name = 'wil';
        address.street = street;
        user.address = address;
        streetName(user).should.equal('wil');
      });

    });

    describe('functional', () => {
      it('user is premium', () => {
      });

      it('user is not premium', () => {
      });
    });
  });

});
