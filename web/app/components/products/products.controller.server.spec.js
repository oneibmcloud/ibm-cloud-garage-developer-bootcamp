/*eslint dot-notation: "off"*/
import {replace, when} from '../../../../test-helper';

describe.only('the products controller', () => {
  it('has no products', () => {
    let ProductsController = require('./products.controller')['ProductsController'];
    let productsController = new ProductsController();
    productsController.products.should.deepEqual([]);
  });

  it('fetches products from the server', () => {
    let productsService;
    let ProductsController;
    let productsController;

    productsService = require('./service/products-service').productsService();
    replace(productsService, 'fetch');
    when(productsService.fetch()).thenResolve(['products']);

    ProductsController = require('./products.controller')['ProductsController'];
    productsController = new ProductsController(productsService);

    return productsController.fetch().then(() => {
      productsController.products.should.deepEqual(['products']);
    });
  });
});


