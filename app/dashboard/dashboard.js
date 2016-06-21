'use strict';

angular.module('myApp.dashboard', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'Products'
    });
}])

.controller('Products', Products);

Products.$inject = ['dataservice'];

function Products(dataservice) {
    var vm = this;
    vm.products = [];
    vm.store = [];
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
}