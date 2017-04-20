import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {sideNavComponent} from './side-nav-component.js';

export const sideNav = angular.module('sideNav', [
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('sideNav', sideNavComponent);
