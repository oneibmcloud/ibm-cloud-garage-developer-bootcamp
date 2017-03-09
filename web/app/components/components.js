import angular from 'angular';
import {details} from './products/details/details';

export const components = angular.module('components', [
  details.name
]);
