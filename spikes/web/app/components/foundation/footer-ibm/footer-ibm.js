import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {footerIbmComponent} from './footer-ibm-component.js';

export const footerIbm = angular.module('footerIbm', [
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('footerIbm', footerIbmComponent);
