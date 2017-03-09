import {DetailsController} from './details.controller';

describe('the details controller', () => {

  let detailsController, productsService;
  beforeEach(() => {
    productsService = { getProducts: () => {} };
    detailsController = new DetailsController(productsService);
  });

  describe('interacts with the UI and product service, and', () => {
    it('has no products', () => {
      detailsController.products.should.be.empty();
    });

    it('has no error message', () => {
      detailsController.message.should.be.empty();
    });

    it('registers success and error handlers', (done) => {
      detailsController.handleSuccess = () => {};
      detailsController.handleError = () => {};
      productsService.getProducts = (success, error) => {
        (success).should.equal(detailsController.handleSuccess);
        (error).should.equal(detailsController.handleError);
        done();
      };
      detailsController.getProducts();
    });

    it('installs its products', () => {
      const products = [
        {
          title: 'RF-97 Autograph',
          variants: [{ price: 250 }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      detailsController.updateProducts(products);
      (detailsController.products).should.deepEqual(products);
    });

    it('updates its error message', () => {
      const message = 'error';
      detailsController.updateMessage(message);
      (detailsController.message).should.deepEqual(message);
    });

    it('delegates product updates to success handler', () => {
      const products = [
        {
          title: 'RF-97 Autograph',
          variants: [{ price: 250 }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      detailsController.handleSuccess(products);
      (detailsController.products).should.deepEqual(products);
    });

    it('delegates error message updates to error handler', () => {
      const error = 'Not Found';
      const status = 402;
      let message = error + '(status=' + status + ')';

      detailsController.handleError(error, status);
      (detailsController.message).should.be.equal(message);
    });
  });
});
