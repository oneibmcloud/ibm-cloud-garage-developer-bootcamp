const popup = ($mdDialog) => {
  return {
    show: (message) => {
      $mdDialog.show($mdDialog.alert({
        title: 'Error',
        textContent: message,
        ok: 'Close'
      }));
    }
  };
};

//noinspection JSValidateTypes
popup.$inject = ['$mdDialog'];

export {popup};
