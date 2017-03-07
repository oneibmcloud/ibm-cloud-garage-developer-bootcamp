var GaugeController = $scope => {
  const NUMBER_OF_TABS = 4;
  const FIRST_TAB_INDEX = 0;
  const LAST_TAB_INDEX = NUMBER_OF_TABS - 1;

  $scope.selectedTab = FIRST_TAB_INDEX;
  $scope.isPreviousDisabled = true;

  $scope.onPrevious = () => {
    $scope.selectedTab = ($scope.selectedTab - 1) % NUMBER_OF_TABS;
    $scope.isPreviousDisabled = ($scope.selectedTab === FIRST_TAB_INDEX);
    $scope.isNextDisabled = false;
  };

  $scope.onNext = () => {
    $scope.selectedTab = ($scope.selectedTab + 1) % NUMBER_OF_TABS;
    $scope.isNextDisabled = ($scope.selectedTab === LAST_TAB_INDEX);
    $scope.isPreviousDisabled = false;
  };
};

GaugeController.$inject = ['$scope'];

export {GaugeController};


