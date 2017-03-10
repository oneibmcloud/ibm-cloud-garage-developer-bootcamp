export const sendEventService = ($rootScope) => {
  let selectedProduct = {};

  const sendProduct = (product) => {
    console.log('sendProduct: ' + JSON.stringify(product));
    $rootScope.$broadcast('ProductAddedToCartEvent', product);
    selectedProduct = product;
  };

  const getProduct = () => {
    return selectedProduct;
  };

  const clearProduct = () => {
     selectedProduct = {};
  };

  return {
    sendProduct,
    getProduct,
    clearProduct
  };
};

sendEventService.$inject = ['$rootScope'];

