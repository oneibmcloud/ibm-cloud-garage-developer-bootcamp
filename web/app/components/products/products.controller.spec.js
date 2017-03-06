import {ProductsController} from './products.controller';

describe('Products Controller Testing', () => {

  let productController, productsService;
  beforeEach(() => {
    productsService = { getProducts: () => {} };
    productController = new ProductsController(productsService);
  });

  describe('Products Controller Behavior', () => {

    it('It should be empty after initialization', () => {
      productController.products.should.be.empty();
    });

    it('the error message should be empty', () => {
      productController.message.should.be.empty();
    });

    it('should register success and error handlers', (done) => {
      productController.handleSuccess = () => {};
      productController.handleError = () => {};
      productsService.getProducts = (success, error) => {
        (success).should.equal(productController.handleSuccess);
        (error).should.equal(productController.handleError);
        done();
      };
      productController.getProducts();
    });

    it('should update products', () => {
      const products = [
        {
          title: 'RF-97 Autograph',
          variants: [{ price: 250 }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      productController.updateProducts(products);
      (productController.products).should.deepEqual(products);
    });

    it('should update message', () => {
      const message = 'error';
      productController.updateMessage(message);
      (productController.message).should.deepEqual(message);
    });

    it('success handler should update products', () => {
      const products = [
        {
          title: 'RF-97 Autograph',
          variants: [{ price: 250 }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      productController.handleSuccess(products);
      (productController.products).should.deepEqual(products);
    });

    it('error handler should update message', () => {
      const error = 'Not Found';
      const status = 402;
      let message = error + '(status=' + status + ')';

      productController.handleError(error, status);
      (productController.message).should.be.equal(message);
    });
  });
});
