import angular from 'angular';
import {cards} from './cards/cards';
import {drilldownDirective} from './drilldown.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const drilldown = angular.module('drilldown', [
  ngAnimate,
  ngAria,
  ngMaterial,
  cards.name
])

.config( ($stateProvider) => {
  $stateProvider.
      state('main.drilldown', {
        url: '/drilldown',
        selectedTab: 4,
        template: '<drilldown></drilldown>'
      });
})

.directive('drilldown', drilldownDirective);
