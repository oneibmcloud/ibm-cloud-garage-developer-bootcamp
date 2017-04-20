import './contacts.styl';
import template from './contacts.html';
import {ContactsController as controller} from './contacts.controller.js';

export const contactsDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
