import './products.styl';
import template from './products.html';

export const productsDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
