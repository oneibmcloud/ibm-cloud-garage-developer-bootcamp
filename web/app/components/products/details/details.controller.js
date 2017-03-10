function DetailsController(productsService, $stateParams) {
  let vm = this;
  vm.title = 'Products';
  vm.products = [];
  vm.message = ''; // initial error message

  vm.getProducts = function () {
    productsService.getProducts(vm.handleSuccess, vm.handleError);
  };

  vm.getProduct = function (productId) {
    productsService.getProduct(productId, vm.handleSingleSuccess, vm.handleError);
  };

  vm.updateProducts = (products) => {
    if (products[0].id) {
      vm.products = products;
    }
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

  vm.handleSingleSuccess = function(product) {
    vm.updateProducts([product]);
  };

  if ($stateParams && $stateParams.productId) {
    vm.getProduct(parseInt($stateParams.productId));
  } else {
    vm.getProducts();
  }
}

DetailsController.$inject = ['productsService', '$stateParams'];

export {DetailsController};
