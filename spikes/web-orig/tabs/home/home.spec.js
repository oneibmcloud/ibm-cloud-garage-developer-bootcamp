import 'script!jquery/dist/jquery';
import angular from 'angular';

import {home} from './home';

describe('Home page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<home></home>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(home.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a first section title', () => {
      ($(element).find('.home-title1').text()).should.equal(
          'Angularjs.1.x Reference App');
    });

    it('a second section title', () => {
      ($(element).find('.home-title2').text()).should.equal(
          'Angular 2 to follow shortly');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        ($(element).attr('layout-align')).should.equal('start');
      });
    });

    describe('a first section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'Eros odio sit, augue magnis porttitor cras urna mauris odio');
        });

        it('and more lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'elementum parturient pulvinar porttitor non dignissim');
        });
      });

      describe('a second bullet which contains ', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'Arcu ridiculus nisi hac, diam! Ut scelerisque, placerat, et!');
        });

        it('and more lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'Tortor tempor! Habitasse dictumst amet arcu sit a ut.');
        });
      });

      describe('and a third bullet which contains', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'pulvinar etiam scelerisque nec, tincidunt in mus dictumst, placerat nec facilisis!');
        });

        it('more lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'Tortor aenean massa mus. In duis penatibus, lacus placerat augue');
        });

        it('and yet more lorem ipsum', () => {
          ($(element).find('.home-section1').text()).should.containEql(
              'pid porttitor habitasse rhoncus sagittis platea vel, rhoncus rhoncus');
        });
      });
    });

    describe('and a second section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section2').text()).should.containEql(
              'pid porttitor habitasse rhoncus sagittis platea vel, rhoncus rhoncus');
        });

        it('and more lorem ipsum', () => {
          ($(element).find('.home-section2').text()).should.containEql(
              'rhoncus rhoncus');
        });
      });

      describe('a second bullet which contains', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section2').text()).should.containEql(
              'Dis et lacus nunc tempor.');
        });
      });

      describe('a third bullet which contains', () => {
        it('lorem ipsum', () => {
          ($(element).find('.home-section2').text()).should.containEql(
              'Placeholder for the mvp vision statement');
        });
      });
    });
  });
});
