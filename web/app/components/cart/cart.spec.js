import 'script!jquery/dist/jquery';
import angular from 'angular';

import {cart} from './cart.js';

describe('the cart page', () => {
  let $scope;
  let $location;
  let $state;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<cart></cart>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(cart.name));

  beforeEach(window.inject((
  $rootScope, $compile, $httpBackend, _$state_, _$location_) => {
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  it('a title', () => {
    ($(element).find('h1').text()).should.equal('Cart Details');
  });

  it('an thumbnail image', () => {
    ($(element).find('img[rel=thumbnail]').length).should.equal(1);
  });

  it('a product name', () => {
    ($(element).find('span[rel=product-name]').length).should.equal(1);
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

  it('/#cart in the url', () => {
    $location.path('/cart');
    $scope.$apply();

    ($state.current.url).should.equal('/cart');
    ($state.current.name).should.equal('cart');
  });
});
