import angular from 'angular';
import {headerIbm} from './header-ibm/header-ibm';
import {footerIbm} from './footer-ibm/footer-ibm';
import {sidenav} from './sidenav/sidenav';

export const common = angular.module('common', [
  headerIbm.name,
  footerIbm.name,
  sidenav.name
]);
