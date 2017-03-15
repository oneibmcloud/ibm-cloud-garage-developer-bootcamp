/*eslint dot-notation: "off"*/
describe.only('the products controller', () => {
  it('has no products', () => {
    let ProductsController = require('./products.controller')['ProductsController'];
    let productsController = new ProductsController();
    productsController.products.should.deepEqual([]);
  });
});


