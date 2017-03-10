import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {cartDirective} from './cart.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const cart = angular.module('cart', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
  state('cart', {
    url: '/cart',
    template: '<cart></cart>'
  });
})

.directive('cart', cartDirective);
