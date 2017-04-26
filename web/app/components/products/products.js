import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {tile} from './tile/tile';
import {productsComponent} from './products-component';

export const products = angular.module('products', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,
  tile.name
])
.directive('products', productsComponent);
