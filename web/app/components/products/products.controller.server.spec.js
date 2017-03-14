/*eslint dot-notation: "off"*/
/*eslint no-shadow: "off"*/

import {replace, when, reset, verify} from '../../../../test-helper';

describe('the products controller', () => {
  let makeProductsControllerWith = (productsService, popupService) => {
    let ProductsController;
    ProductsController = require('./products.controller')['ProductsController'];
    return new ProductsController(productsService, popupService);
  };

  let makeProductsControllerResolveWith = productsService => {
    when(productsService.fetch()).thenResolve(['products']);
    return makeProductsControllerWith(productsService);
  };

  let makeProductsControllerRejectWith = (productsService, popupService) => {
    when(productsService.fetch()).thenReject(new Error('server error'));
    return makeProductsControllerWith(productsService, popupService);
  };

  context.only('on startup', () => {
    let productsService;
    let popupService;
    let productsController;

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
      return productsController.fetch().then(() => {
        productsController.products.should.deepEqual(['products']);
      });
    });

    it('displays a popup on error', () => {
      productsController = makeProductsControllerRejectWith(productsService, popupService);

      return productsController.fetch().then().catch(() => {
        verify(popupService.show('error requesting products: server error'));
      });
    });

    afterEach(() => reset());
  });
});


