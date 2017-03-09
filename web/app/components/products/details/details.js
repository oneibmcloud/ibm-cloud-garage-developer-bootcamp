import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {detailsDirective} from './details.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const details = angular.module('details', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
  state('details', {
    url: '/product',
    template: '<details></details>'
  });
})

.directive('details', detailsDirective);
