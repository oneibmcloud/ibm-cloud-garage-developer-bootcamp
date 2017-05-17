import 'script!jquery/dist/jquery';
import angular from 'angular';
import {popup} from './popup';

describe('Popup page', () => {
  let buildTemplate = () => {
    return angular.element('<popup></popup>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(popup.name));

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
