let DrilldownController = ($scope, $state) => {
  $scope.$on('$stateChangeSuccess', (event, toState) => {
    $scope.selectedTab = toState.selectedTab;
  });

  $scope.drilldown = () => {
    $state.go('cards');
  };
};

DrilldownController.$inject = ['$scope', '$state'];

export {DrilldownController};


