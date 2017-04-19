#!/usr/bin/env node

import fs from 'fs';
import R from 'ramda';
const {tail, head, toUpper, toLower, compose, juxt, join} = R;

const upperCase = compose(
  join(''),
  juxt([compose(toUpper, head), tail])
);

const lowerCase = compose(
  join(''),
  juxt([compose(toLower, head), tail])
);

const folder = __dirname;
const parent = __dirname.split('/');
const filename = parent[parent.length - 1];

const htmlFileName = filename + '.html';
const stylFileName = filename + '.styl';
const controllerFileName = filename + '-controller';
const componentFileName = filename + '-component';
const moduleFileName = filename;

const html = folder + '/' + htmlFileName;
const styl = folder + '/' + stylFileName;
const controller = folder + '/' + controllerFileName;
const component = folder + '/' + componentFileName;
const module = folder + '/' + moduleFileName;

const controllerName = filename.split('-').reduce((acc, segment) => {
  return acc + upperCase(segment);
}, '') + 'Controller';

const componentName = lowerCase(filename.split('-').reduce((acc, segment) => {
  return acc + upperCase(segment);
}, '') + 'Component');

const moduleName = lowerCase(filename.split('-').reduce((acc, segment) => {
  return acc + upperCase(segment);
}, ''));

fs.writeFileSync(html, '<div></div>\n');
fs.writeFileSync(styl, '');

fs.writeFileSync(controller + '.js',
  'function ' + controllerName + '() {\n' +
  '  const vm = this;\n' +
  '  console.log(vm);\n' +
  '}\n\n' +
  '//noinspection JSValidateTypes\n' +
  controllerName + '.$inject = [];\n\n' +
  'export {' + controllerName + '};\n'
);

fs.writeFileSync(component + '.js',
  'import \'./' + stylFileName + '\';\n' +
  'import template from \'./' + htmlFileName + '\';\n' +
  'import {' + controllerName + ' as controller} from \'./' + controllerFileName + '\';\n' +
  '\n' +
  'export const ' + componentName + ' = () => {\n' +
  '  return {\n' +
  '    template,\n' +
  '    restrict: \'E\',\n' +
  '    replace: true,\n' +
  '    scope: {},\n' +
  '    controller,\n' +
  '    controllerAs: \'vm\'\n' +
  '  };\n' +
  '};\n'
);

fs.writeFileSync(module + '.js',
`import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {` + componentName + '} from \'./' + componentFileName + `';

export const ` + moduleName + ' = angular.module(\'' + moduleName + `', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('` + moduleName + '\', ' + componentName + `);
`
);

export const componentBuilder = {
  html: html,
  styl: styl,
  controller: controller + '.js',
  component: component + '.js',
  module: module + '.js',
  folder: folder,
  filename: filename
};
