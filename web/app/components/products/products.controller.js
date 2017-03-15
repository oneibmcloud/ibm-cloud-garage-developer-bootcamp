function ProductsController(productsService) {
  const vm = this;
  vm.products = [];
  vm.fetch = url => {
    return productsService.fetch(url).then((products) => {
      vm.products = products;
    });
  };
}

ProductsController.$inject = ['productsService'];

export {ProductsController};
