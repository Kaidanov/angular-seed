(function () {

    'use strict';

    // Declare app level module which depends on views, and components
     angular.module('myApp', [
      'ngRoute',
      'ngResource',
      'myApp.view1',
      'myApp.view2',
      'myApp.version',
      'app.core'
    ]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/view1' });
    }]);

})();

  //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  //$httpProvider.defaults.transformRequest = [function (data) {
  //    var param = function (obj) {
  //        var query = '';
  //        var name, value, fullSubName, subName, subValue, innerObj, i;
  //        for (name in obj) {
  //            value = obj[name];
  //            if (value instanceof Array) {
  //                for (i = 0; i < value.length; ++i) {
  //                    subValue = value[i];
  //                    fullSubName = name + '[' + i + ']';
  //                    innerObj = {};
  //                    innerObj[fullSubName] = subValue;
  //                    query += param(innerObj) + '&';
  //                }
  //            }
  //            else if (value instanceof Object) {
  //                for (subName in value) {
  //                    subValue = value[subName];
  //                    fullSubName = name + '[' + subName + ']';
  //                    innerObj = {};
  //                    innerObj[fullSubName] = subValue;
  //                    query += param(innerObj) + '&';
  //                }
  //            }
  //            else if (value !== undefined && value !== null) {
  //                query = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  //            }
  //        }

  //        return query.length ? query.substr(0, query.length - 1) : query;
  //    };

  //    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  //}];
//}]);


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

//angular.module('myApp').factory('dataservice', ['$http', function ($http) {

//           var service = {
//               getProducts: getProducts
//           };
 
//           return service;

//           function getProducts() {
//               return $http.get('data.json').then(getProductsComplete);
//           }

//           function getProductsComplete(data, status, headers, config) {
//               return data.data;
//           };

           

//}]);



//app.run(['$q', '$rootScope', function ($q, $rootScope) {
//}]);
