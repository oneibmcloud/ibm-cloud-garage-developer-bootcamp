import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {tile} from './tile/tile';
import {productsService} from './service/products-service-module';
import {productsComponent} from './products-component';
import {popupService} from './service/popup-service-module';

export const products = angular.module('products', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,
  tile.name,
  productsService.name,
  popupService.name
])
.config(($stateProvider) => {
  $stateProvider.state('products', {
    url: '/products',
    template: '<products></products>'
  });
})
.directive('products', productsComponent);
