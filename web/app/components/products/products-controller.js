function ProductsController(service, popupService) {
  const vm = this;
  vm.products = [];

  vm.fetch = (url) => {
    const fetch = service.fetch(url);

    fetch.then((response) => {
      vm.products = response.data.products;
    });

    fetch.catch((error) => {
      popupService.show('Error', error.statusText + ': ' + error.status,
        'Close');
    });

    return fetch;
  };

  vm.fetch('/products.json');
}

//noinspection JSValidateTypes
ProductsController.$inject = ['service', 'popupService'];

export {ProductsController};
