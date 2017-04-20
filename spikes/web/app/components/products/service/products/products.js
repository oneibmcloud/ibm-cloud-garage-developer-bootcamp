const products = ($http) => {
  return {fetch: (url) => {
    return $http.get(url);
  }};
};

//noinspection JSValidateTypes
products.$inject = ['$http'];

export {products};

