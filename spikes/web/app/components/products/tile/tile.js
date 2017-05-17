import angular from 'angular';

import {tileComponent} from './tile-component.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const tile = angular.module('tile', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.directive('tile', tileComponent);
