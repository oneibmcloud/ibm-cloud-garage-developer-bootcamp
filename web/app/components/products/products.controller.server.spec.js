/*eslint dot-notation: "off"*/
/*eslint no-shadow: "off"*/

import {replace, when, reset} from '../../../../test-helper';

describe.only('the products controller', () => {
  let productsService;
  let ProductsController;
  let productsController;

  let makeProductsControllerWith = (productsService) => {
    ProductsController = require('./products.controller')['ProductsController'];
    return new ProductsController(productsService);
  };

  beforeEach(() => {
    productsService = require('./service/products-service').productsService();
    replace(productsService, 'fetch');
  });

  it('has no products', () => {
    productsController = makeProductsControllerWith(productsService);
    productsController.products.should.deepEqual([]);
  });

  it('fetches products from the server', () => {
    when(productsService.fetch('/products.json')).thenResolve(['products']);
    productsController = makeProductsControllerWith(productsService);

    return productsController.fetch('/products.json').then(() => {
      productsController.products.should.deepEqual(['products']);
    });
  });

  afterEach(() => reset());
});


