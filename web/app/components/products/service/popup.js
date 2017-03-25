import angular from 'angular';
import {popup} from './popup/popup';

export const popupService = angular.module('popupService', [
]).factory('popup', popup);
