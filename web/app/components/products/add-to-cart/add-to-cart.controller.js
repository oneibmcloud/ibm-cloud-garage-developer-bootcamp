function addToCartController(sendEventService, $scope, $location) {
  let ct = this;
   ct.onClick = function (){
     sendEventService.sendProduct($scope.product);
     $location.url('/cart');
  };
}

addToCartController.$inject = ['sendEventService', '$scope', '$location'];

export {addToCartController};
