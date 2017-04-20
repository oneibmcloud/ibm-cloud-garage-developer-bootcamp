import angular from 'angular';

import {gauge} from './gauge/gauge';
import {cardsDirective} from './cards.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const cards = angular.module('cards', [
  ngAnimate,
  ngAria,
  ngMaterial,

  gauge.name
])

.config( ($stateProvider) => {
  $stateProvider.state('cards', {
    url: '/cards',
    template: '<cards></cards>'
  });
})

.directive('cards', cardsDirective);
