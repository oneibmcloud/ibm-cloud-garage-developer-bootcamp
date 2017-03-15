function ProductsController(productsService, popupService) {
  const vm = this;
  vm.products = [];

  vm.fetch = url => {
    return productsService.fetch(url)
    .then((products) => {
      vm.products = products;
    })
    .catch((error) => {
      popupService.show('error requesting products: ' + error.message);
    });
  };
}

//noinspection JSValidateTypes
ProductsController.$inject = ['productsService'];

export {ProductsController};
