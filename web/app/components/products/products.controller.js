function ProductsController(productService) {
  const vm = this;
  vm.products = [];
  vm.fetch = productService.fetch;
}

ProductsController.$inject = ['productService'];

export {ProductsController};
