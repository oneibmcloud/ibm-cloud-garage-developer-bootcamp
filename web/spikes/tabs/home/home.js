import angular from 'angular';
import {homeDirective} from './home.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const home = angular.module('home', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
      state('main.home', {
        url: '/home',
        selectedTab: 0,
        template: '<home></home>'
      });
})

.directive('home', homeDirective);
