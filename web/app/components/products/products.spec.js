
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {products} from './products';

describe('the products page', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<products></products>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows the products\'', () => {
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
