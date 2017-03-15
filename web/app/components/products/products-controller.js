/*eslint no-shadow: "off"*/

function ProductsController(products, popup) {
  const vm = this;
  vm.products = [];

  vm.fetch = url => {
    return products.fetch(url)
    .then((products) => {
      vm.products = products;
    })
    .catch((error) => {
      popup.show('error requesting products: ' + error.message);
    });
  };
}

//noinspection JSValidateTypes
ProductsController.$inject = ['products'];

export {ProductsController};
