import angular from 'angular';
import {PopupService} from './popup-service';

export const popupService = angular.module('popupService', [
]).factory('popupService', PopupService);
