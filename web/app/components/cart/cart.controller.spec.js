/* eslint no-unused-vars: 'off' */
import {CartController} from './cart.controller';

describe('the cart controller', () => {

  let $scope;
  let cartController;

  beforeEach(window.inject(($rootScope) => {
    $scope = $rootScope.$new();
    cartController = new CartController($scope);
  }));

  it('getPrice returns the price', () => {
    let product = {
      variants: [
        {
          price: 120
        }
      ]
    };
    cartController.getPrice(product).should.equal(120);
  });

  it('getDiscountedPrice returns the discounted price', () => {
    let product = {
      variants: [
        {
          price: 120
        }
      ]
    };
    cartController.getDiscountedPrice(product).should.equal(120 * 0.8);
  });

  it('getSaving returns the saving', () => {
    let product = {
      variants: [
        {
          price: 120
        }
      ]
    };
    cartController.getSaving(product).should.equal(120 * 0.2);
  });

  it('getRetailTotal returns the total rice', () => {
    cartController.products = [{
      variants: [
        {
          price: 120
        }
      ]
    }, {
      variants: [
        {
          price: 150
        }
      ]
    }];
    cartController.getRetailTotal().should.equal(270);
  });

  it('getDiscountedTotal returns the total discounted price', () => {
    cartController.products = [{
      variants: [
        {
          price: 120
        }
      ]
    }, {
      variants: [
        {
          price: 150
        }
      ]
    }];
    cartController.getDiscountedTotal().should.equal(270 * 0.8);
  });

  it('getSavingTotal returns the total saving', () => {
    cartController.products = [{
      variants: [
        {
          price: 120
        }
      ]
    }, {
      variants: [
        {
          price: 150
        }
      ]
    }];
    cartController.getSavingTotal().should.equal(270 * 0.2);
  });
});
