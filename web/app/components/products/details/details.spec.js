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
    return angular.element('<details product="product"></details>');
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

  it('/#product in the url', () => {
    $location.path('/product/');
    $scope.$apply();

    ($state.current.url).should.equal('/product/');
    ($state.current.name).should.equal('details');
  });

});
