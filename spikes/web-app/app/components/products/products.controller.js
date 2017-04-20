function ProductsController(productsService) {
  let vm = this;
  vm.title = 'Products';
  vm.products = [];
  vm.message = ''; // initial error message

  vm.getProducts = function () {
    productsService.getProducts(vm.handleSuccess, vm.handleError);
  };

  vm.updateProducts = (products) => {
    vm.products = products;
  };

  vm.updateMessage = (message) => {
    vm.message = message;
  };

  vm.handleSuccess = function(products) {
    vm.updateProducts(products);
  };

  vm.handleError = function (error, status) {
    let errMessage = error + '(status=' + status + ')';
    vm.updateMessage(errMessage);
  };

  vm.getProducts();
}

ProductsController.$inject = ['products'];

export {ProductsController};
