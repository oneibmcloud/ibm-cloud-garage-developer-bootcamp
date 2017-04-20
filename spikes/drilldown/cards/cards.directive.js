import './cards.styl';
import template from './cards.html';
import {CardsController as controller} from './cards.controller.js';

export const cardsDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
