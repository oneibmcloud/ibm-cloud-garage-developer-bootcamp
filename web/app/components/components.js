import angular from 'angular';

import {foundation} from './foundation/foundation';
import {products} from './products/products';

export const components = angular.module('components', [
  foundation.name,
  products.name
]);
