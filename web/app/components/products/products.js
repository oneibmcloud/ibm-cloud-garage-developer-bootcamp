import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {productsComponent} from './products-component';
import {productsService} from './service/products';
import {popupService} from './service/popup';
import {tile} from './tile/tile';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const products = angular.module('products', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  productsService.name,
  popupService.name,
  tile.name
])
.config( ($stateProvider) => {
  $stateProvider.
  state('products', {
    url: '/products',
    template: '<products></products>'
  });
})
.directive('products', productsComponent);
