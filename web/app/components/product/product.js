import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {productComponent} from './product-component';

export const product = angular.module('product', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('product', productComponent);
