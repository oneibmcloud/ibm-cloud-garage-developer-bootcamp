export const productService = ($http) => {
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

productService.$inject = ['$http'];
