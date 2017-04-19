import 'angular-material/angular-material.css';
import '../styles/style.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {entryPointContainer} from './entry-point-container';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {components} from './components/components';

export const entryPoint = angular.module('entryPoint', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  components.name
])

.config(function($mdThemingProvider) {
  //noinspection JSUnresolvedFunction
  $mdThemingProvider.theme('default');
})

.directive('entryPoint', entryPointContainer);
