import './popup/popup.styl';
import template from './popup/popup.html';
import {PopupController as controller} from './popup/popup.controller.js';

let CardsController = ($scope, $element, $mdDialog) => {
  let configureNavigator = () => {
    const NUMBER_OF_TABS = 5;
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

  let configurePopup = () => {
    $scope.showPopup = (event) => {
      $mdDialog.show({
        controller,
        template,
        parent: $element,
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: false
      }).then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function error () {
        $scope.status = 'You cancelled the dialog.';
      });
    };
  };

  let configureGauge = () => {
    $scope.bounds = '100';
    $scope.cx = '50';
    $scope.cy = '50';
    $scope.radius = '40';
    $scope.completed = '50';
  };

  configureNavigator();
  configurePopup();
  configureGauge();
};

CardsController.$inject = ['$scope', '$element', '$mdDialog'];

export {CardsController};


