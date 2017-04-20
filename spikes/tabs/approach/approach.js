import angular from 'angular';
import {approachDirective} from './approach.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const approach = angular.module('approach', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
      state('main.approach', {
        url: '/approach',
        selectedTab: 1,
        template: '<approach></approach>'
  });
})

.directive('approach', approachDirective);
