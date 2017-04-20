import './products.styl';
import template from './products.html';
import {ProductsController as controller} from './products-controller';

export const productsComponent = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      products: '='
    },
    controller,
    controllerAs: 'vm'
  };
};
