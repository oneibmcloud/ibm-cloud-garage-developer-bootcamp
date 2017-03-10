import {ProductsController} from './products.controller';
let productsController = new ProductsController();
productsController.getProducts();

describe('the products controller ', () => {

  it('shows that the infrasturcture works', () => {
    true.should.be.true();
  });

  describe('interacts with the UI ', () => {

    it('installs its products', () => {
      const products = [
        {
          title: 'RF-97 Autograph',
          variants: [{ price: 250 }],
          image: { src: 'http://www.ibm.com/image01' }
        }
      ];
      (productsController.products).should.deepEqual(products);
    });
  });

});
