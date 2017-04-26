import {replace, when} from '../../../../test-helper';

describe('product controller', () => {
  it('starts with no products', () => {
    const ProductController = require('./product-controller').ProductController;
    const productsController = new ProductController();
    productsController.products.should.deepEqual([]);
  });
  it('fetches the products', () => {
    const ProductsService = require('./service/products-service').ProductsService;
    const productsService = new ProductsService();
    replace(productsService, 'fetch');


    let stubbedValues = {data: {products: ['dummy product']}};
    when(productsService.fetch('/products.json')).thenResolve(stubbedValues);

    const ProductController = require('./product-controller').ProductController;
    const productsController = new ProductController(productsService);

    return productsController.fetch('/products.json').then(() => {
      productsController.products.should.deepEqual(['dummy product']);
    });
  });
});
