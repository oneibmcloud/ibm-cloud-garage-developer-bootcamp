import fs from 'fs';
import {componentBuilder} from './make-component';

const readFile = fs.readFileSync;
const encoding = {encoding: 'utf8'};

const htmlStub = '<div></div>\n';
const styleStub = '';

const controllerStub =
`function BuildComponentController() {
  const vm = this;
  console.log(vm);
}

//noinspection JSValidateTypes
BuildComponentController.$inject = [];

export {BuildComponentController};
`;

const componentStub =
`import './build-component.styl';
import template from './build-component.html';
import {BuildComponentController as controller} from './build-component-controller';

export const buildComponentComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
`;

const moduleStub =
`import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {buildComponentComponent} from './build-component-component';

export const buildComponent = angular.module('buildComponent', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('buildComponent', buildComponentComponent);
`;

describe('angular 1.x component creator', () => {
  it('knows the current folder', () => {
    componentBuilder.folder.should.endWith('build-component');
  });

  it('knows the file name', () => {
    componentBuilder.filename.should.equal('build-component');
  });

  it('builds an html stub', () => {
    const html = componentBuilder.html;
    html.should.startWith(componentBuilder.folder);
    html.should.endWith('build-component.html');
    readFile(html, encoding).should.equal(htmlStub);
  });

  it('builds an style stub', () => {
    const styl = componentBuilder.styl;
    styl.should.startWith(componentBuilder.folder);
    styl.should.endWith('build-component.styl');
    readFile(styl, encoding).should.equal(styleStub);
  });

  it('builds an controller stub', () => {
    const controller = componentBuilder.controller;
    controller.should.startWith(componentBuilder.folder);
    controller.should.endWith('build-component-controller.js');
    readFile(controller, encoding).should.equal(controllerStub);
  });

  it('builds a component stub', () => {
    const component = componentBuilder.component;
    component.should.startWith(componentBuilder.folder);
    component.should.endWith('build-component-component.js');
    readFile(component, encoding).should.equal(componentStub);
  });

  it('builds and module stub', () => {
    const module = componentBuilder.module;
    module.should.startWith(componentBuilder.folder);
    module.should.endWith('build-component.js');
    readFile(module, encoding).should.equal(moduleStub);
  });
});
