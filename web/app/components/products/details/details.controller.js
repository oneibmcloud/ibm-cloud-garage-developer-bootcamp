function DetailsController(productsService, $stateParams) {
  let vm = this;
  vm.title = 'Products';
  vm.products = [];
  vm.discount = 0.2;
  vm.message = ''; // initial error message

  vm.getPrice = function() {
    if (vm.products.length === 0) return 0;
    return vm.products[0].variants[0].price;
  };

  vm.getDiscountedPrice = function() {
    return vm.getPrice() * (1 - vm.discount);
  };

  vm.getSaving = function() {
    return vm.getPrice() * vm.discount;
  };

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
