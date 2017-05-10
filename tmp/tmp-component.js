import './tmp.styl';
import template from './tmp.html';
import {TmpController as controller} from './tmp-controller';

export const tmpComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
