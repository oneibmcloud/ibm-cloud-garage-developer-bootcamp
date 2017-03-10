/* eslint no-unused-vars: 'off' */
import {CartController} from './cart.controller';

describe('the cart controller', () => {

  let $scope;
  let cartController;

  beforeEach(window.inject(($rootScope) => {
    $scope = $rootScope.$new();
    cartController = new CartController($scope);
  }));

  it('interacts with xxx');
});
