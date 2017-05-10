import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {tmpComponent} from './tmp-component';

export const tmp = angular.module('tmp', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('tmp', tmpComponent);
