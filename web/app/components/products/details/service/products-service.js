export const productsService = ($http) => {
  const getProducts = (success, failure) => {
    $http.get('/products.json')
        .success(response => {
          success(response.products);
        })
        .error(failure);
  };

  const getProduct = (productId, success, failure) => {
    $http.get('/products.json')
    .success(response => {
      for (let product of response.products) {
        if (product.id == productId) {
          console.log(product);
          success(product);
        }
      }

      success({});
    })
    .error(failure);
  };

  return {
    getProducts,
    getProduct
  };
};

productsService.$inject = ['$http'];
