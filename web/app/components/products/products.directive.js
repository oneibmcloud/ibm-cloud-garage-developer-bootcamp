import './products.styl';
import template from './products.html';
import {ProductsController as controller} from './products.controller.js';

export const productsDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
