import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {productsDirective} from './products.directive.js';
import {productServiceModule} from './product-service-module';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const products = angular.module('products', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  productServiceModule.name
])

.config( ($stateProvider) => {
  $stateProvider.
  state('products', {
    url: '/products',
    template: '<products></products>'
  });
})
.directive('products', productsDirective);
