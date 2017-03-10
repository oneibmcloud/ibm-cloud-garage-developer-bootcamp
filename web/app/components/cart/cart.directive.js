import './cart.styl';
import template from './cart.html';
import {CartController as controller} from './cart.controller.js';

export const cartDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    controller,
    controllerAs: 'vm'
  };
};
