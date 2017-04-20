import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {headerIbmComponent} from './header-ibm-component.js';

export const headerIbm = angular.module('headerIbm', [
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('headerIbm', headerIbmComponent);
