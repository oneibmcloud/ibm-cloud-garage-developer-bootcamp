import './product.styl';
import template from './product.html';
import {ProductController as controller} from './product-controller';

export const productComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
