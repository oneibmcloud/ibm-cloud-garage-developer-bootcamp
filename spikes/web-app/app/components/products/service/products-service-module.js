import angular from 'angular';
import {productsService} from './products-service';

export const productsServiceModule = angular.module('productsServiceModule', [
]).factory('productsService', productsService);
