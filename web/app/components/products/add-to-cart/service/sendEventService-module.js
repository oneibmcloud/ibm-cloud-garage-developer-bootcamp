import angular from 'angular';
import {sendEventService} from './sendEventService';

export const sendEventServiceModule = angular.module('sendEventServiceModule', [
]).factory('sendEventService', sendEventService);
