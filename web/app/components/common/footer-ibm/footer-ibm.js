import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {footerIbmComponent} from './footer-ibm-component';

export const footerIbm = angular.module('footerIbm', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('footerIbm', footerIbmComponent);
