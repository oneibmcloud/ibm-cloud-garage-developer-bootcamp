import 'script!jquery/dist/jquery';
import angular from 'angular';

import {tile} from './tile';

describe('the products tile', () => {
  let $scope;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<tile products="products"></tile>');
  };

  beforeEach(window.module(tile.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('shows the products', () => {
    it('name: RF-97 Autograph', () => {
      $scope.product = {title: 'RF-97 Autograph'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"products-title"' + ']').text())
          .should.equal('RF-97 Autograph');
    });

    it('price: 250', () => {
      $scope.product = {variants: [{price: 250.00}]};
      $scope.$digest();
      ($(element).find('span[rel=' + '"products-price"' + ']').text())
          .should.equal('$250.00');
    });

    it('thumbnail image', () => {
      $scope.product = {image: {src: 'https://cdn.shopify.com/s/files/1/1208/4008/products/rs_62e7004d-db70-4304-a95a-87d19306e359.jpeg?v=1457955026'}};
      $scope.$digest();
      ($(element)).find('img').attr('src').should.equal('https://cdn.shopify.com/s/files/1/1208/4008/products/rs_62e7004d-db70-4304-a95a-87d19306e359.jpeg?v=1457955026');
    });
  });
});
