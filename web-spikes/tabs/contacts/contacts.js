import angular from 'angular';
import {contactsDirective} from './contacts.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const contacts = angular.module('contacts', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {
  $stateProvider.
      state('main.contacts', {
        url: '/contacts',
        selectedTab: 3,
        template: '<contacts></contacts>'
      });
})

.directive('contacts', contactsDirective);
