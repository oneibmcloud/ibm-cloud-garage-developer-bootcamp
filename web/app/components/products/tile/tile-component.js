import './tile.styl';
import template from './tile.html';

export const tileComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      product: '='
    }
  };
};
