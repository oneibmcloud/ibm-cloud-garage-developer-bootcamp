import 'script!jquery/dist/jquery';
import angular from 'angular';

import {details} from './details';

describe('the product details page', () => {
  let $scope;
  let $location;
  let $state;
  let $timeout;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<details></details>');
  };

  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(details.name));

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

  it('proves that the test infrastructure works', () => {
    true.should.be.true();
  });

  it('a title', () => {
    ($(element).find('h1').text()).should.equal('Product Details');
  });

  it('an thumbnail image', (done) => {
    $timeout(function() {
      ($(element).find('img[rel=thumbnail]').length).should.equal(1);
      done();
    }, 1000);
  });

  it('a retail price', () => {
    ($(element).find('span[rel=retail-price]').length).should.equal(1);
  });

  it('a discount price', () => {
    ($(element).find('span[rel=discounted-price]').length).should.equal(1);
  });

  it('a saving', () => {
    ($(element).find('span[rel=saving]').length).should.equal(1);
  });

  it('an available quantity', () => {
    ($(element).find('span[rel=available-quantity]').length).should.equal(1);
  });

  it('a product details', () => {
    ($(element).find('p[rel=product-details]').length).should.equal(1);
  });

  it('/#product/{productId} in the url', () => {
    $location.path('/product/5427694785');
    $scope.$apply();

    ($state.current.url).should.equal('/product/{productId}');
    ($state.current.name).should.equal('details');
  });

});
