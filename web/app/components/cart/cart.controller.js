function CartController($scope) {
  let vm = this;
  vm.title = 'Cart';
  vm.products = [];
  vm.discount = 0.2;

  vm.handleProductAddedToCartEvent = function(event, args) {
    vm.products.push(args);
  };

  vm.getPrice = function(product) {
    return parseFloat(product.variants[0].price);
  };

  vm.getDiscountedPrice = function(product) {
    return vm.getPrice(product) * (1 - vm.discount);
  };

  vm.getSaving = function(product) {
    return vm.getPrice(product) * vm.discount;
  };

  vm.getRetailTotal = function() {
    let total = 0;
    for (let product of vm.products) {
      total += vm.getPrice(product);
    }
    return total;
  };

  vm.getDiscountedTotal = function() {
    let total = 0;
    for (let product of vm.products) {
      total += vm.getDiscountedPrice(product);
    }
    return total;
  };

  vm.getSavingTotal = function() {
    let total = 0;
    for (let product of vm.products) {
      total += vm.getSaving(product);
    }
    return total;
  };

  $scope.$on('ProductAddedToCartEvent', vm.handleProductAddedToCartEvent);
}

CartController.$inject = ['$scope'];

export {CartController};
