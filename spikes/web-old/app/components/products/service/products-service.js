export const productsService = ($http) => {
  const getProducts = (success, failure) => {
    $http.get('/products.json')
        .success(response => {
          success(response.products);
        })
        .error(failure);
  };

  return {
    getProducts
  };
};

productsService.$inject = ['$http'];
