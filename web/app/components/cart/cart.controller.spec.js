import {CartController} from './cart.controller';

describe('the cart controller', () => {

  let cartController;
  beforeEach(() => {
    cartController = new CartController();
  });

  describe('interacts with xxx', () => {
    it('has no products', () => {
      cartController.products.should.be.empty();
    });
  });
});
