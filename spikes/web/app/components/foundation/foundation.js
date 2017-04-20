import angular from 'angular';

import {headerIbm} from './header-ibm/header-ibm';
import {footerIbm} from './footer-ibm/footer-ibm';
import {sideNav} from './side-nav/side-nav';

export const foundation = angular.module('foundation', [
  headerIbm.name,
  footerIbm.name,
  sideNav.name
]);
