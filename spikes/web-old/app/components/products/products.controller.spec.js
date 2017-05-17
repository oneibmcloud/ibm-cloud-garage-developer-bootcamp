import {ProductsController} from './products.controller';

describe('the products controller', () => {

  let productController, productsService;
  beforeEach(() => {
    productsService = { getProducts: () => {} };
    productController = new ProductsController(productsService);
  });

  describe('interacts with the UI and products service, and', () => {
    it('has no products', () => {
      productController.products.should.be.empty();
    });

    it('has no error message', () => {
      productController.message.should.be.empty();
    });

    it('registers success and error handlers', (done) => {
      productController.handleSuccess = () => {};
      productController.handleError = () => {};
      productsService.getProducts = (success, error) => {
        (success).should.equal(productController.handleSuccess);
        (error).should.equal(productController.handleError);
        done();
      };
      productController.getProducts();
    });

    it('installs its products', () => {
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
termin
    it('updates its error message', () => {
      const message = 'error';
      productController.updateMessage(message);
      (productController.message).should.deepEqual(message);
    });

    it('delegates products updates to success handler', () => {
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

    it('delegates error message updates to error handler', () => {
      const error = 'Not Found';
      const status = 402;
      let message = error + '(status=' + status + ')';

      productController.handleError(error, status);
      (productController.message).should.be.equal(message);
    });
  });
});
