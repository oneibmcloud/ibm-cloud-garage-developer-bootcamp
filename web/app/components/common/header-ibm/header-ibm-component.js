import './header-ibm.styl';
import template from './header-ibm.html';

export const headerIbmComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
