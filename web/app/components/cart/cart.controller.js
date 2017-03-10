function CartController($scope) {
  let vm = this;
  vm.title = 'Cart';

  $scope.product = {
    'id': 5427691329,
    'title': 'ms Head Graphene XT Instinct MP',
    'body_html': 'Victor fake body html',
    'vendor': 'IBM MOCK STORE',
    'product_type': '',
    'created_at': '2016-03-14T04:30:24-07:00',
    'handle': 'ms-head-graphene-xt-instinct-mp',
    'updated_at': '2016-03-14T04:30:26-07:00',
    'published_at': '2016-03-14T04:29:00-07:00',
    'template_suffix': null,
    'published_scope': 'global',
    'tags': '',
    'variants': [
      {
        'id': 16680068161,
        'product_id': 5427691329,
        'title': 'Default Title',
        'price': '189.95',
        'sku': '',
        'position': 1,
        'grams': 0,
        'inventory_policy': 'deny',
        'compare_at_price': null,
        'fulfillment_service': 'manual',
        'inventory_management': 'shopify',
        'option1': 'Default Title',
        'option2': null,
        'option3': null,
        'created_at': '2016-03-14T04:30:24-07:00',
        'updated_at': '2016-03-14T04:30:24-07:00',
        'taxable': true,
        'barcode': '',
        'image_id': null,
        'inventory_quantity': 100001,
        'weight': 0,
        'weight_unit': 'lb',
        'old_inventory_quantity': 100001,
        'requires_shipping': true
      }
    ],
    'options': [
      {
        'id': 6459738625,
        'product_id': 5427691329,
        'name': 'Title',
        'position': 1,
        'values': [
          'Default Title'
        ]
      }
    ],
    'images': [
      {
        'id': 10006450113,
        'product_id': 5427691329,
        'position': 1,
        'created_at': '2016-03-14T04:30:26-07:00',
        'updated_at': '2016-03-14T04:30:26-07:00',
        'src': 'https://cdn.shopify.com/s/files/1/1208/4008/products/rs_62e7004d-db70-4304-a95a-87d19306e359.jpeg?v=1457955026',
        'variant_ids': []
      }
    ],
    'image': {
      'id': 10006450113,
      'product_id': 5427691329,
      'position': 1,
      'created_at': '2016-03-14T04:30:26-07:00',
      'updated_at': '2016-03-14T04:30:26-07:00',
      'src': 'https://cdn.shopify.com/s/files/1/1208/4008/products/rs_62e7004d-db70-4304-a95a-87d19306e359.jpeg?v=1457955026',
      'variant_ids': []
    }
  };

  vm.handleProductAddedToCartEvent = function(event, args) {
    console.log(event);
    console.log(args);

    // add product from event to products[]
  };

  $scope.$on('ProductAddedToCartEvent', vm.handleProductAddedToCartEvent);
}

CartController.$inject = ['$scope'];

export {CartController};
