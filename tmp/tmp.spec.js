
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {tmp} from './tmp';

describe('the tmp', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<tmp></tmp>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(tmp.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows the product', () => {
    it.skip('name: RF-97 Autograph', () => {
      $scope.product = {title: 'RF-97 Autograph'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('RF-97 Autograph');
    });
  });
});
