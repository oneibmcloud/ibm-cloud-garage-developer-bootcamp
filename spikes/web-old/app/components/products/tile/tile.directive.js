import './tile.styl';
import template from './tile.html';

export const tileDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      product: '='
    }
  };
};
