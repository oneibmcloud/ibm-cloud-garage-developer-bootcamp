/**
 * Created by jhtrujil on 4/21/2017.
 */
import {replace, when, verify, reset} from '../../../../test-helper';

let products;

describe('product controller', () => {
  it('starts with no products', () => {
    const ProductController = require('./product-controller').ProductController;
    const productsController = new ProductController();
    productsController.products.should.deepEqual([]);
  });
});
