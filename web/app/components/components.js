import angular from 'angular';
import {details} from './products/details/details'
import {addToCart} from './products/add-to-cart'

export const components = angular.module('components', [
  details.name,
  addToCart.name
]);
