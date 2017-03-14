import 'script!jquery/dist/jquery';
import angular from 'angular';

import {entryPoint} from './app';

describe('the app\'s entry point', () => {
  let $scope;
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<app></app>');
  };

  beforeEach(window.module(entryPoint.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  it('swaps regions in and out of the main content area', () => {
    $(element).find('md-content[ui-view=""]').length.should.not.equal(0);
  });
});
