import angular from 'angular';
import {popupService} from './popup/popup';

export const popupServiceModule = angular.module('popupServiceModule', [
]).factory('popupService', popupService);
