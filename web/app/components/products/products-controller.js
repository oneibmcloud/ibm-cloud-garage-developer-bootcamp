function ProductsController(service, popupService) {
  const vm = this;
  vm.products = [];

  vm.fetch = url => {
    return service.fetch(url).then((response) => {
      vm.products = response.data.products;
    }).catch((error) => {
      popupService.show('Error', error.statusText + ': ' + error.status,
        'Close');
    });
  };
}

//noinspection JSValidateTypes
ProductsController.$inject = ['service', 'popupService'];

export {ProductsController};
