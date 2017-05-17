const fs = require('fs');
const R = require('ramda');

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
const angularModule = folder + '/' + moduleFileName;
const spec = folder + '/' + filename + '.spec.js';
const integration = folder + '/' + filename + '.integration.spec.js';

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

fs.writeFileSync(angularModule + '.js',
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

fs.writeFileSync(spec,
`
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {` + moduleName + '} from \'./' + moduleFileName + `';

describe('the ` + filename + `', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<` + filename + '></' + filename + `>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(` + moduleName + `.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows the product', () => {
    it.skip('name: RF-97 Autograph', () => {
      $scope.product = {title: 'RF-97 Autograph'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('RF-97 Autograph');
    });
  });
});
`);

fs.writeFileSync(integration,
`
/*eslint no-undef: "off"*/

import 'script!jquery/dist/jquery';
import angular from 'angular';

import {` + moduleName + '} from \'./' + moduleFileName + `';

describe('the ` + filename + `', () => {
  const $ = window.$;
  let element, $scope, $location, $state, $timeout;

  let buildTemplate = () => {
    return angular.element('<` + filename + ' products="products"></' + filename + `>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(` + moduleName + `.name));
  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.inject(($rootScope, $compile, _$state_, _$location_,
  _$timeout_, $httpBackend) => {

    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;
    $timeout = _$timeout_;
    $httpBackend.whenGET(/.*/).passThrough();

    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows', () => {
    it.skip('/#products in the url', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });

    it.skip('a title', () => {
      $(element).find('h1[rel=' + '"products-title"' + ']').text().should.equal('Products');
    });

    it.skip('products', (done) => {
      $timeout(function() {

        $(element).find('span[rel=product-title]').length.should.equal(27);
        done();

      }, 1000);
    });
  });
});
`
);

const componentBuilder = {
  html: html,
  styl: styl,
  controller: controller + '.js',
  component: component + '.js',
  module: angularModule + '.js',
  spec: spec,
  integration: integration,
  folder: folder,
  filename: filename
};

module.exports = componentBuilder;

