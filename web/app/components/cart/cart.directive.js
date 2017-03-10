import './cart.styl';
import template from './cart.html';

export const cartDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
