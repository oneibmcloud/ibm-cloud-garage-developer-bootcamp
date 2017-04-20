// ...enable testing of the popup's logic...

import './popup.styl';
import template from './popup.html';
import {PopupController as controller} from './popup.controller.js';

export const popupDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
