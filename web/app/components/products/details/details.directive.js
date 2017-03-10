import './details.styl';
import template from './details.html';
import {DetailsController as controller} from './details.controller.js';

export const detailsDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    controller,
    controllerAs: 'vm'
  };
};
