import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {addToCartDirective} from './add-to-cart.directive';

export const addToCart = angular.module('addToCart', [
  uiRouter,
  ngAnimate,
  ngAria,

  ngMaterial
])

.directive('addToCart', addToCartDirective);
