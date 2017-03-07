// ...enable testing of the popup's logic...

import angular from 'angular';

import {popupDirective} from './popup.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const popup = angular.module('popup', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.directive('popup', popupDirective);
