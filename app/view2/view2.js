'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'Cart'
  });
}])

.controller('Cart', [function() {
    var vm = this;
    vm.cartItems = [];
    vm.title = 'Cart';


    //function addItem(id) {
    //    return dataservice.addItem(id).then(function (data) {
    //        var item = new cartItem(sku, name, price, quantity);
    //        vm.cartItems.push(item);
    //        console.log('got those items in the cart' + vm.cartItems.toString());
    //    });
    //}
}]);