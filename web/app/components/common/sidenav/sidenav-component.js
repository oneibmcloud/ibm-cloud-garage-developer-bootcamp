import './sidenav.styl';
import template from './sidenav.html';

export const sidenavComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
