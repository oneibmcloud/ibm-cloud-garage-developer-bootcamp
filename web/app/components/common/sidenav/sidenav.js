import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {sidenavComponent} from './sidenav-component';

export const sidenav = angular.module('sidenav', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('sidenav', sidenavComponent);
