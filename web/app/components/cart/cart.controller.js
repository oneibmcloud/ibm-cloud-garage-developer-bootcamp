function CartController($scope) {
  let vm = this;
  vm.title = 'Cart';
  vm.products = [];

  console.log($scope);

  vm.handleProductAddedToCartEvent = function(event, args) {
    console.log(event);
    console.log(args);
  };

  //$scope.$on('ProductAddedToCartEvent', vm.handleProductAddedToCartEvent);
}

CartController.$inject = ['$scope'];

export {CartController};
