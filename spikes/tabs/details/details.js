import angular from 'angular';
import {detailsDirective} from './details.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const details = angular.module('details', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
      state('main.details', {
        url: '/details',
        selectedTab: 2,
        template: '<details></details>'
      });
})

.directive('details', detailsDirective);
