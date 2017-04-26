import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {tileComponent} from './tile-component';

export const tile = angular.module('tile', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('tile', tileComponent);
