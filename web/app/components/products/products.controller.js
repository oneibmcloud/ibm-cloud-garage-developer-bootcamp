function ProductsController(productService) {
  const vm = this;
  vm.products = [];
  vm.fetch = productService.fetch;

  vm.fetch().then((products) => {
    vm.products = products;
  });
}

ProductsController.$inject = ['productService'];

export {ProductsController};
