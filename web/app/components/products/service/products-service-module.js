import angular from 'angular';
import {ProductsService} from './products-service';

export const productsService = angular.module('productsService', [
]).factory('service', ProductsService);
