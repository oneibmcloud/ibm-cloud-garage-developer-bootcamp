describe('product controller', () => {
  it('starts with no products', () => {
    const ProductController = require('./product-controller').ProductController;
    const productsController = new ProductController();
    productsController.products.should.deepEqual([]);
  });
});
