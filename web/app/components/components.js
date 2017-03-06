import angular from 'angular';
import {products} from './products/products';

export const components = angular.module('components', [
  products.name
]);
