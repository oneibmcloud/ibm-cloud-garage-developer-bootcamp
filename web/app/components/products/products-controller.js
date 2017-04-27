function ProductsController(service) {
  const vm = this;
  vm.products = [];

  vm.fetch = (url) => {
    return service.fetch(url).then((response) => {
      vm.products = response.data.products;
    });
  };

  vm.fetch('/products.json');
}

//noinspection JSValidateTypes
ProductsController.$inject = ['service'];

export {ProductsController};
