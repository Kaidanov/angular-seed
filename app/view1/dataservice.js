(function () {
    'use strict';

    angular
        .module('app.core', [])
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        var service = {
            getProducts: getProducts
        };

        return service;

        function getProducts() {
            return $http.get('data.json')
                .then(getProductsComplete);
        }

        function getProductsComplete(data, status, headers, config) {
            return data.data;
        };
    }
})();


//(function () {
//    angular.module('myApp')
//      .factory('dataservice', ['$http', function ($http) {
//          var service = {
//              getProducts: getProducts
//          };

//          return service;

//          function getProducts() {
//              return $http.get('data.json').then(getProductsComplete);
//          }

//          function getProductsComplete(data, status, headers, config) {
//              return data.data;
//          };
//      }]);
//}());