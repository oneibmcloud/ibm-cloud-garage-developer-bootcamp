import {productsService} from './products-service';

describe('the product service', () => {
  let $httpBackend;
  let $http;

  beforeEach(window.inject((_$httpBackend_, _$http_) => {
    $httpBackend = _$httpBackend_;
    $http = _$http_;
  }));

  describe('calls out over http and', () => {
    it('gets the product list', done => {
      $httpBackend.whenGET('/products.json')
      .respond(200, '{"products": []}');

      let success = products => {
        (products).should.be.empty();
        done();
      };
      let failure = () => {
        throw new Error('should not be called');
      };

      let service = productsService($http);
      service.getProducts(success, failure);

      $httpBackend.flush();
    });

    it('gets a single product', done => {
      $httpBackend.whenGET('/products.json')
      .respond(200, '{"products": [{"id": 5427691329}]}');

      let success = products => {
        (products).should.not.be.empty();
        done();
      };
      let failure = () => {
        throw new Error('should not be called');
      };

      let service = productsService($http);
      service.getProduct(5427691329, success, failure);

      $httpBackend.flush();
    });

    it('handles http errors', (done) => {
      $httpBackend.whenGET('/products.json')
          .respond(404, 'Page Not Found.');

      let success = () => {
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
