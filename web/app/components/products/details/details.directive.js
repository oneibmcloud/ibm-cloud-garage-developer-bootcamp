import './details.styl';
import template from './details.html';

export const detailsDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      product: '='
    }
  };
};
