/*eslint dot-notation: "off"*/
/*eslint no-shadow: "off"*/

import {replace, when, reset, verify} from '../../../../test-helper';

describe.only('the products controller', () => {
  let popupService;
  let productsService;
  let ProductsController;
  let productsController;

  let makeProductsControllerResolveWith = (productsService) => {
    when(productsService.fetch('/products.json')).thenResolve(['products']);
    ProductsController = require('./products.controller')['ProductsController'];
    return new ProductsController(productsService);
  };

  beforeEach(() => {
    productsService = require('./service/products-service').productsService();
    replace(productsService, 'fetch');

    popupService = require('./service/popup-service').popupService();
    replace(popupService, 'show');
  });

  it('has no products', () => {
    productsController = makeProductsControllerResolveWith(productsService);
    productsController.products.should.deepEqual([]);
  });

  it('fetches products from the server', () => {
    productsController = makeProductsControllerResolveWith(productsService);

    return productsController.fetch('/products.json').then(() => {
      productsController.products.should.deepEqual(['products']);
    });
  });

  it('displays a popup on error', () => {
    when(productsService.fetch('/products.json')).thenReject(
        new Error('server error'));

    ProductsController = require('./products.controller')['ProductsController'];
    productsController = new ProductsController(productsService, popupService);

    return productsController.fetch('/products.json').then().catch(() => {
      verify(popupService.show('error requesting products: server error'));
    });
  });

  afterEach(() => reset());
});


