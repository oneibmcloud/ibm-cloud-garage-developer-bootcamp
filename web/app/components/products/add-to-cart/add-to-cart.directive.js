import './add-to-cart.styl';
import template from './add-to-cart.html';
import {addToCartController as controller} from './add-to-cart.controller';

export const addToCartDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      product: '='
    },
    controller,
    controllerAs: 'ct'
  };
};
