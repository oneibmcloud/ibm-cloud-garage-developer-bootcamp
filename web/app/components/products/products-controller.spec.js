import {replace, when, verify} from '../../../../test-helper';

describe('products controller', () => {

  function createProductsService() {
    const ProductsService = require('./service/products-service').ProductsService;
    const productsService = new ProductsService();
    replace(productsService, 'fetch');
    return productsService;
  }

  function makeFakeService() {
    const productsService = createProductsService();

    let stubbedValues = {data: {products: ['dummy products']}};
    when(productsService.fetch('/products.json')).thenResolve(stubbedValues);
    return productsService;
  }

  it('starts with no products', () => {
    const productsService = makeFakeService();
    const ProductsController = require('./products-controller').ProductsController;
    const productsController = new ProductsController(productsService);
    productsController.products.should.deepEqual([]);
  });

  it('fetches the products', () => {
    const productsService = makeFakeService();

    const ProductsController = require('./products-controller').ProductsController;
    const productsController = new ProductsController(productsService);

    return productsController.fetch('/products.json').then(() => {
      productsController.products.should.deepEqual(['dummy products']);
    });
  });

  it('popup an error', () =>{
    const productsService = createProductsService();

    const PopupService = require('./service/popup-service').PopupService;
    const popupService = new PopupService();
    replace(popupService, 'show');

    let dummyError = {statusText: 'dummy error message', status: 404};
    when(productsService.fetch('/products.json')).thenReject(dummyError);

    const ProductsController = require('./products-controller').ProductsController;
    const productsController = new ProductsController(productsService, popupService);

    return productsController.fetch('/products.json', (() => {
      verify(popupService.show('Error', 'dummy error message: 404', 'Close'));
    }));
  });
});
