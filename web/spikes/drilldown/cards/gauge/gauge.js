import angular from 'angular';

import {gaugeDirective} from './gauge.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const gauge = angular.module('gauge', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.state('gauge', {
    url: '/gauge',
    template: '<gauge></gauge>'
  });
})

.directive('gauge', gaugeDirective);
