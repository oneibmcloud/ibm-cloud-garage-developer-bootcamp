import angular from 'angular';
import {productService} from './product-service';

export const productServiceModule = angular.module('productServiceModule', []).factory('productService', productService);
