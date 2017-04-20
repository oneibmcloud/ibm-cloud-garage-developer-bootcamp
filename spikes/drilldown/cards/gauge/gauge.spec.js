import 'script!jquery/dist/jquery';
import angular from 'angular';

import {gauge} from './gauge';

describe('Gauge page', () => {
  let buildTemplate = () => {
    return angular.element('<gauge></gauge>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(gauge.name));

  beforeEach(window.inject( ($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
    });
  });
});
