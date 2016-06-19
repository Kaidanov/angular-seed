'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'Products'
  });
}])

.controller('Products', ['dataservice', function (dataservice) {
    var vm = this;
    vm.products = [];
    vm.title = 'Products';

    activate();

    function activate() {
        return getProducts().then(function () {
            console.log("we got ourselfs some products");
        });
    }

    function getProducts() {
        return dataservice.getProducts().then(function (data) {
            vm.products = data.products;
            console.log(vm.products[0].productName);
            return vm.products;
        });
    }
}]);