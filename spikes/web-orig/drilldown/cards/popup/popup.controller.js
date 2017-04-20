let PopupController = ($scope, $mdDialog) => {
  $scope.cancel = () => {
    $mdDialog.cancel();
  };

  $scope.answerClicked = (answer) => {
    $mdDialog.hide(answer);
  };
};

PopupController.$inject = ['$scope', '$mdDialog'];

export {PopupController};


