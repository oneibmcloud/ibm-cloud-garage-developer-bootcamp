
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {product} from './product';

describe('the product', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<product></product>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(product.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows the product', () => {
    it('title', () => {
      ($(element).find('h1').text())
          .should.startWith('Products');
    });

    it('count', () => {
      ($(element).find('h1').text())
          .should.endWith('3');
    });
  });
});
