angular.module('ui.productBox', []).directive('uiFoo',
    function () {
        return {
            restrict: 'EAC',
            require: '?ngModel',
            link: function ($scope, element, attrs, controller) {
                var controllerOptions, options;
                element.text('iamfoo');
            }
        };
    }
  );