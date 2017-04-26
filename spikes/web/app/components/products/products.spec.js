/*eslint no-undef: "off"*/

import 'script!jquery/dist/jquery';
import angular from 'angular';

import {products} from './products';

describe('the products page', () => {
  let $scope, $location, $state, element, $timeout;

  let buildTemplate = () => {
    return angular.element('<products products="products"></products>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));
  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.inject(($rootScope, $compile, _$state_, _$location_,
  _$timeout_, $httpBackend) => {

    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;
    $timeout = _$timeout_;
    $httpBackend.whenGET(/.*/).passThrough();

    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows', () => {
    it('/#products in the url', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });

    it('a title', () => {
      $(element).find('h1[rel=' + '"products-title"' + ']').text().should.equal('Products');
    });

    it('products', (done) => {
      $timeout(function() {

        $(element).find('span[rel=products-title]').length.should.equal(27);
        done();

      }, 1000);
    });
  });
});
