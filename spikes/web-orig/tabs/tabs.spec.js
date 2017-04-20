import 'script!jquery/dist/jquery';
import angular from 'angular';
import {tabs} from './tabs';

describe('Main page', () => {
  let buildTemplate = () => {
    return angular.element('<tabs></tabs>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(tabs.name));

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
