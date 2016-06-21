(function () {

    'use strict';

    // Declare app level module which depends on views, and components
     angular.module('myApp', [
      'ngRoute',
      'ngResource',
      'myApp.dashboard',
      'myApp.view2',
      'myApp.version',
      'app.core'
    ]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/dashboard' });
    }]);

})();
