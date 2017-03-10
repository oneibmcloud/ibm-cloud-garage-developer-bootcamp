function addToCartController($scope) {
  let ct = this;

  ct.message = ''; // initial error message

  ct.addItem = function (){
    alert("test");
    $scope.$emit('aCustomEvent', 'some random string');
  };

}

addToCartController.$inject = ['$scope'];

export {addToCartController};
