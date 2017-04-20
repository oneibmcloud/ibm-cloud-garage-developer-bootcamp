import './approach.styl';
import template from './approach.html';
import {ApproachController as controller} from './approach.controller.js';

export const approachDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
