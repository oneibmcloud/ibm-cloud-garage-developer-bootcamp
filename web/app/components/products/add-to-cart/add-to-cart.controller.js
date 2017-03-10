function addToCartController(sendEventService, $scope) {
  let ct = this;
   ct.onClick = function (){
     sendEventService.sendProduct($scope.product);
  };
}

addToCartController.$inject = ['sendEventService', '$scope'];

export {addToCartController};
