import 'script!jquery/dist/jquery';
import angular from 'angular';

import {approach} from './approach';

describe('Approach page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<approach></approach>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(approach.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
      ($(element).find('.approach-title').text()).should.equal('Approach');
    });

    describe('and a description which contains', () => {
      it('some lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'Integer turpis erat, porttitor vitae mi faucibus,');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at');
      });

      it('and some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'posuere mi.');
      });
    });

    describe('a region of blocks which have', () => {
      it('a Problem block', () => {
        ($(element).find('.problem').text()).should.equal('ProblemStatement');
      });

      it('a Data Approach block', () => {
        ($(element).find('.data').text()).should.equal('DataApproach');
      });

      it('an Impacted Areas block', () => {
        ($(element).find('.impacted').text()).should.equal('ImpactedAreas');
      });

      it('a Disclosure Approach block', () => {
        ($(element).find('.disclosure').text()).should.equal('DisclosureReports');
      });
    });
  });
});
