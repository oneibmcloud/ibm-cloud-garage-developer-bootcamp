import 'script!jquery/dist/jquery';
import angular from 'angular';

import {cards} from './cards';

describe('Cards page', () => {
  let buildTemplate = () => {
    return angular.element('<cards></cards>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(cards.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
    });
  });
});
