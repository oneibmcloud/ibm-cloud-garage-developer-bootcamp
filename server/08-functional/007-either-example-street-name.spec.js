/*eslint no-shadow: "off"*/

import {fromNullable} from './functional-types';

describe('either example collection', () => {
  describe('street names', () => {
    const user = {address: null};
    const address = {street: null};
    const street = {name: null};

    describe('imperative', () => {
      const streetName = user => {
        const address = user.address;

        if (address) {
          const street = address.street;
          if (street) return street.name;
        }
        return 'no street';
      };

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
      const streetName = user =>
        fromNullable(user.address)
        .chain(address => fromNullable(address.street))
        .map(street => street.name)
        .fold(() => 'no street', name => name);

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
  });

});
