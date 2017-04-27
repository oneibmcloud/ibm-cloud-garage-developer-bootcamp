import {replace, when} from '../../../../test-helper';

describe('products controller', () => {

  function makeFakeService() {
    const ProductsService = require('./service/products-service').ProductsService;
    const productsService = new ProductsService();
    replace(productsService, 'fetch');

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
});
