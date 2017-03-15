import angular from 'angular';
import {productsService} from './products/products';

export const productsServiceModule = angular.module('productsServiceModule', [
]).factory('productsService', productsService);
