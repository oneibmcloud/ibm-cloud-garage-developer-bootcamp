import 'script!jquery/dist/jquery';
import {products} from './products.js';


describe('the products page', () => {
  let $scope;
  let $location;
  let $state;

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));

  beforeEach(window.inject(($rootScope, _$state_, _$location_) => {
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    $scope.$digest();
  }));

  describe('shows', () => {
    it('/#products in the url', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });
  });
});
