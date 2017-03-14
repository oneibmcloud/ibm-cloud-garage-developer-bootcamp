import 'script!jquery/dist/jquery';
import angular from 'angular';

import {products} from './products';

describe('the products page', () => {
  let $scope;
  let $location;
  let $state;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<products products="products"></products>');
  };

  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));

  beforeEach(window.inject((
      $rootScope, $compile, _$state_, _$location_) => {
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    $compile(buildTemplate())($scope);
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
