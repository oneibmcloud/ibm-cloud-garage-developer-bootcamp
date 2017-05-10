
/*eslint no-undef: "off"*/

import 'script!jquery/dist/jquery';
import angular from 'angular';

import {tmp} from './tmp';

describe('the tmp', () => {
  const $ = window.$;
  let element, $scope, $location, $state, $timeout;

  let buildTemplate = () => {
    return angular.element('<tmp products="products"></tmp>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(tmp.name));
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
    it.skip('/#products in the url', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });

    it.skip('a title', () => {
      $(element).find('h1[rel=' + '"products-title"' + ']').text().should.equal('Products');
    });

    it.skip('products', (done) => {
      $timeout(function() {

        $(element).find('span[rel=product-title]').length.should.equal(27);
        done();

      }, 1000);
    });
  });
});
