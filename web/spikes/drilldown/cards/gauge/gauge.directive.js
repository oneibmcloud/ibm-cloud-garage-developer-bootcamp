import './gauge.styl';
import template from './gauge.html';
import {GaugeController as controller} from './gauge.controller.js';

// usage: <gauge boundingbox="100" x="50" y="50" r="40" percent="50"></gauge>
// example: http://codepen.io/wil-pannell/pen/pgWvqo

export const gaugeDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,

    scope: {
      boundingbox: '=',
      x: '=',
      y: '=',
      r: '=',
      percent: '='
    }
  };
};
