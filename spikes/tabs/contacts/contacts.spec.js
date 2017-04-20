import 'script!jquery/dist/jquery';
import angular from 'angular';

import {contacts} from './contacts';

describe('Contacts page', () => {
  let buildTemplate = () => {
    return angular.element('<contacts></contacts>');
  };

  let $ = window.$;
  let element;

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(contacts.name));

  beforeEach(window.inject( ($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
      ($(element).find('.contacts-title').text()).should.equal('Contacts');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        ($(element).attr('layout-align')).should.equal('start');
      });
    });

    describe('and a description which contains', () => {
      it('some lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.');
      });

      it('some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql(
            'Praesent ligula diam, congue eu enim scelerisque, finibus commodo');
      });

      it('and some more lorem ipsumm', () => {
        ($(element).find('.description').text()).should.containEql('lectus');
      });
    });
  });
});
