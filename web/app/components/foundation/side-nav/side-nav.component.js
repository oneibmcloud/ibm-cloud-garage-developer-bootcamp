import './side-nav.styl';
import template from './side-nav.html';

export const sideNavComponent = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
