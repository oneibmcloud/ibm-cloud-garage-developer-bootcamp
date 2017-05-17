import 'script!jquery/dist/jquery';
import angular from 'angular';

import {drilldown} from './drilldown';

describe('Drilldown page', () => {
  let buildTemplate = () => {
    return angular.element('<drilldown></drilldown>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(drilldown.name));

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
