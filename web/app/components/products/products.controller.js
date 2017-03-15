function ProductsController(productsService) {
  const vm = this;
  vm.products = [];
  vm.fetch = productsService.fetch;

  vm.fetch().then((products) => {
    vm.products = products;
  });
}

ProductsController.$inject = ['productsService'];

export {ProductsController};
