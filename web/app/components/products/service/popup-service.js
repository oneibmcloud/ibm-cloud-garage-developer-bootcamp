const PopupService = ($mdDialog) => {
  return {
    show: (title, text, label) => {
      $mdDialog.show(
        $mdDialog
        .alert()
        .title(title)
        .textContent(text)
        .ok(label)
      );
    }
  };
};

export {PopupService};
