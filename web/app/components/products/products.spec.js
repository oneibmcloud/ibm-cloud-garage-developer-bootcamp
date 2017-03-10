import 'script!jquery/dist/jquery';
import angular from 'angular';
import {products} from './products.js';


describe('the products page', () => {
  let $scope;
  let $location;
  let $state;
  let $timeout;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<products products="products"></products>');
  };

  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));

  beforeEach(window.inject((
  $rootScope, $compile, $httpBackend, _$state_, _$location_, _$timeout_) => {
    $timeout = _$timeout_;
    $httpBackend.whenGET(/.*/).passThrough();
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows', () => {

    // it(' the product name', () => {
    //   ($(element).find('span[rel=' + '"products-name"' + ']').text()).should.equal('RF-97 Autograph');
    // });
    // it(' the product thumbnail', () => {
    //   ($(element)).find('img').attr('src').should.equal('http://www.ibm.com/image01');
    //
    // });
    // it(' the product retail price', () => {
    //   ($(element).find('span[rel=' + '"products-price"' + ']').text()).should.equal('$250.00');
    //
    // });
    // it(' the product discount price', () => {
    //   ($(element).find('span[rel=' + '"products-discount"' + ']').text()).should.equal('$200.00');
    //
    // });

    it('/#products in the url', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });

  });


});
