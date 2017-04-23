
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {tile} from './tile';

describe('the tile', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<tile product="product"></tile>');
  };

  const productDummy = {
    title: 'vw Wilson Blade 104',
    vendor: 'IBM MOCK STORE',
    variants: [
      {
        price: '199.00'
      }
    ],
    image: {
      src: 'https://cdn.shopify.com/s/files/1/1208/4008/products/rs_4_da3694bf-f670-4c15-9561-9855c8ff0c0b.jpeg?v=1457955392'
    }
  };

  beforeEach(window.module(tile.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));


  describe('shows the product', () => {
    it('title', () => {
      $scope.product = {title: 'vw Wilson Blade 104'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('vw Wilson Blade 104');
    });
    it('description');
    it('image');
    it('retail price');
    it.skip('name: RF-97 Autograph', () => {
      $scope.product = {title: 'RF-97 Autograph'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('RF-97 Autograph');
    });
  });
});
