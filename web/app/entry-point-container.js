import './entry-point.styl';
import template from './entry-point.html';

export const entryPointContainer = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
