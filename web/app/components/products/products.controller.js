function ProductsController(productsService) {
  let vm = this;
  vm.title = 'Products';
  vm.products = [
    {
      title: 'RF-97 Autograph',
      variants: [{ price: 250, discount: 200 }],
      image: { src: 'http://www.ibm.com/image01' }
    }
  ];
  vm.message = '';

  vm.getProducts = function () {
    return vm.products;
  };
};

ProductsController.$inject = ['productsService'];

export {ProductsController};
