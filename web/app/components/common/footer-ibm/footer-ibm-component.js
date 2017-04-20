import './footer-ibm.styl';
import template from './footer-ibm.html';

export const footerIbmComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
