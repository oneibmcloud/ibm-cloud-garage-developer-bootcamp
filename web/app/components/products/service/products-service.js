const ProductsService = ($http) => {
  return {
    fetch: (url) => {
      return $http.get(url);
    }};
};

ProductsService.$inject = ['$http'];

export {ProductsService};
