import './drilldown.styl';
import template from './drilldown.html';
import {DrilldownController as controller} from './drilldown.controller.js';

export const drilldownDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
