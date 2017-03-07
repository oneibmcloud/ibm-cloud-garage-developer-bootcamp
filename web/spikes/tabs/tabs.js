import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {home} from './home/home';
import {approach} from './approach/approach';
import {details} from './details/details';
import {contacts} from './contacts/contacts';
import {drilldown} from '../../spike/drilldown/drilldown';
import {tabsDirective} from './tabs.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const tabs = angular.module('main', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  home.name,
  approach.name,
  details.name,
  contacts.name,
  drilldown.name
])

.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider
      .when('/', '/tabs/home')
      .otherwise('/tabs/home');

  $stateProvider.
      state('main', {
          abstract: 'true',
          url: '/tabs',
          template: '<tabs></tabs>'
  });
})

.directive('tabs', tabsDirective);
