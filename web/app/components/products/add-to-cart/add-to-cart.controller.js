function addToCartController($scope) {
  let ct = this;

  ct.message = ''; // initial error message

  ct.addItem = function (){
    $scope.$emit('aCustomEvent', 'some random string');
  };

}

addToCartController.$inject = ['$scope'];

export {addToCartController};
