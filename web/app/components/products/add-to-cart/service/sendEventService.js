export const sendEventService = ($rootScope) => {
  const sendProduct = (product) => {
    console.log('sendProduct: ' + JSON.stringify(product));
    $rootScope.$broadcast('ProductAddedToCartEvent', product);
  };

  return {
    sendProduct
  };
};

sendEventService.$inject = ['$rootScope'];

