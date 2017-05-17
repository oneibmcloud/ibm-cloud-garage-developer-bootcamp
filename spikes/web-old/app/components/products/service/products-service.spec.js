import {productsService} from './products-service';

describe('the products service', () => {
  let $httpBackend;
  let $http;

  beforeEach(window.inject((_$httpBackend_, _$http_) => {
    $httpBackend = _$httpBackend_;
    $http = _$http_;
  }));

  describe('calls out over http and', () => {
    it('gets the products list', done => {
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
