import 'script!jquery/dist/jquery';
import angular from 'angular';

import {addToCart} from './add-to-cart';


describe('the add to cart button', () => {
  let $scope;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<add-to-cart></add-to-cart>');
  };

  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  //beforeEach(window.module('ui.router'));
  beforeEach(window.module(addToCart.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows', () => {

    it('an "add to cart" button', () => {
      ($(element)).find('[rel]').text().should.equal('add_shopping_cart');
    });
  });
});
