import './add-to-cart.styl';
import template from './add-to-cart.html';

export const addToCartDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
    }
  };
};
