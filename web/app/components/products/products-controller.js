/*eslint no-shadow: "off"*/

function ProductsController(products, popup) {
  const vm = this;
  vm.products = [];

  vm.fetch = url => {
    const futureProducts = products.fetch(url);

    futureProducts.then((response) => {
      vm.products = response.data.products;
      return response.data.products;
    });

    futureProducts.catch((error) => {
      popup.show('error: ' + error.status + ' requesting products: ' + error.statusMessage);
      return error;
    });

    return futureProducts;
  };

  vm.fetch('/products.json');
}

//noinspection JSValidateTypes
ProductsController.$inject = ['products', 'popup'];

export {ProductsController};
