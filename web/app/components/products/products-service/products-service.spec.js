import {productsService} from './products-service';

describe('Products Service Testing', () => {

  let $httpBackend;
  let $http;

  beforeEach(window.inject((_$httpBackend_, _$http_) => {
    $httpBackend = _$httpBackend_;
    $http = _$http_;
  }));

  describe('Products Service Behavior', () => {
    it('should get the product list', (done) => {
      $httpBackend.whenGET('/products.json')
          .respond(200, '{"products": []}');

      let success = function (products) {
        (products).should.be.empty();
        done();
      };
      let failure = function () {
        throw new Error('should not be called');
      };

      let service = productsService($http);
      service.getProducts(success, failure);

      $httpBackend.flush();
    });
    it('should handle http error', (done) => {
      $httpBackend.whenGET('/products.json')
          .respond(404, 'Page Not Found.');

      let success = function () {
        throw new Error('should not be called');
      };
      let failure = function (error, status) {
        (status).should.equal(404);
        (error).should.equal('Page Not Found.');
        done();
      };

      let service = productsService($http);
      service.getProducts(success, failure);

      $httpBackend.flush();
    });
  });
});
