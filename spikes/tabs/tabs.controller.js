let TabsController = $scope => {
  $scope.$on('$stateChangeSuccess', (event, toState) => {
    $scope.selectedTab = toState.selectedTab;
  });
};

TabsController.$inject = ['$scope'];

export {TabsController};


