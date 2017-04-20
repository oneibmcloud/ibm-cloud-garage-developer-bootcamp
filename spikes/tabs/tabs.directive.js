import './tabs.styl';
import template from './tabs.html';
import {TabsController as controller} from './tabs.controller.js';

export const tabsDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
