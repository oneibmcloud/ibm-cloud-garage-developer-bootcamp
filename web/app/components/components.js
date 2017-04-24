import angular from 'angular';
import {common} from './common/common';
import {product} from './product/product';

export const components = angular.module('components', [
  common.name,
  product.name
]);
