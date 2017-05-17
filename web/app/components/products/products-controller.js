function ProductsController(service, popupService) {
  const vm = this;
  vm.products = [];

  vm.fetch = (url, err = () => {}) => {
    return service.fetch(url).then((response) => {
      vm.products = response.data.products;
    }).catch((error) => {
      popupService.show('Error', error.statusText + ': ' + error.status,
        'Close');
      err(error);
    });
  };
}

//noinspection JSValidateTypes
ProductsController.$inject = ['service', 'popupService'];

export {ProductsController};
