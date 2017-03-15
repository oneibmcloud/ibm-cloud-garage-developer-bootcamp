import angular from 'angular';
import {products} from './products/products';

export const productsService = angular.module('productsService', [
]).factory('products', products);
