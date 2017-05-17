/*eslint dot-notation: "off"*/
/*eslint no-shadow: "off"*/

import td from 'testdouble';
const {replace, when, verify, reset} = td;

describe('the products controller', () => {
  let popupService;
  let productsService;
  let ProductsController;
  let productsController;

  let makeProductsControllerResolveWith = (productsService) => {
    when(productsService.fetch('/products.json')).thenResolve({data: {products: ['products']}});
    ProductsController = require('./products-controller.js')['ProductsController'];
    return new ProductsController(productsService);
  };

  let makeProductsControllerRejectWith = (productsService, popupService) => {
    when(productsService.fetch('/products.json')).thenReject({
      status: 99999999,
      statusMessage: 'we fucked up'});

    ProductsController = require('./products-controller.js')['ProductsController'];
    return new ProductsController(productsService, popupService);
  };

  beforeEach(() => {
    productsService = require('./service/products/products').products();
    replace(productsService, 'fetch');

    popupService = require('./service/popup/popup').popup();
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
    productsController =
        makeProductsControllerRejectWith(productsService, popupService);

    return productsController.fetch('/products.json').catch(() => {
      verify(popupService.show('error: 99999999 requesting products: we fucked up'));
    });
  });

  afterEach(() => reset());
});


