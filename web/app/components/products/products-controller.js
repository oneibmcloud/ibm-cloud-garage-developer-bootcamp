function ProductsController(service) {
  const vm = this;
  vm.fetch = (url) => {
    return service.fetch(url).then((response) => {
      vm.products = response.data.products;
    });
  };
  vm.products = [];
}

//noinspection JSValidateTypes
ProductsController.$inject = [];

export {ProductsController};
