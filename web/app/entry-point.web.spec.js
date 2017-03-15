import 'script!jquery/dist/jquery';
import angular from 'angular';

import {entryPoint} from './entry-point';

describe('the app\'s entry point', () => {
  let $scope;
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<entry-point></entry-point>');
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
