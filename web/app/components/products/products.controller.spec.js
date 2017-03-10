import {ProductsController} from './products.controller';

describe('the products controller ', () => {

  it('shows that the infrasturcture works', () => {
    true.should.be.true();
  });

  let productsController, productsService;
  beforeEach(() => {
    productsService = { getProducts: () => {} };
    productsController = new ProductsController(productsService);
  });

  describe('interacts with the UI ', () => {
    it('has no products', () => {
      productsController.products.should.be.empty();
    });

    it('has no error message', () => {
      productsController.message.should.be.empty();
    });

    it('registers success and error handlers', (done) => {
      productsController.handleSuccess = () => {};
      productsController.handleError = () => {};
      productsService.getProducts = (success, error) => {
        (success).should.equal(productsController.handleSuccess);
        (error).should.equal(productsController.handleError);
        done();
      };
      productsController.getProducts();
    });

    it('installs its products', () => {
      const products = [
        {
          title: 'ms Head Graphene XT Instinct MP',
          variants: [{ price: 189.95, discount: '' }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      productsController.updateProducts(products);
      (productsController.products).should.deepEqual(products);
    });
  });

});
