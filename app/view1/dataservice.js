(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('dataservice', ['$http', '$location', dataservice]);

    function dataservice($http, $location) {

        var service = {
            getProducts: getProducts
        };

        function getProducts() {
            return $http.get('data.json').then(getProductsComplete);
        }

        function getProductsComplete(data, status, headers, config) {
            return data.results;
        };

    }
})();