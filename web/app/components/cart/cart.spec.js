import 'script!jquery/dist/jquery';
import {cart} from './cart.js';

describe('the cart page', () => {
  let $scope;
  let $location;
  let $state;

  beforeEach(window.module('ui.router'));

  beforeEach(window.inject(($rootScope, _$state_, _$location_) => {
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    $scope.$digest();
  }));

  it('/#cart in the url', () => {
    $location.path('/cart');
    $scope.$apply();

    ($state.current.url).should.equal('/cart');
    ($state.current.name).should.equal('cart');
  });
});
