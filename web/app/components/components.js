import angular from 'angular';
import {common} from './common/common';
import {products} from './products/products';

export const components = angular.module('components', [
  common.name,
  products.name
]);
