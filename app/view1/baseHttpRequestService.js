(function () {
    'use strict';
    var serviceId = 'baseHttpRequestService';
    angular.module('myApp').factory(serviceId, [ '$http', '$q', baseHttpRequestService]);
    function baseHttpRequestService($http, $q ) {
        var allData = {};

        var service = {
            sendHttpRequest: sendHttpRequest,
            postHttpRequest: postHttpRequest,
            postRequest: postRequest
        };
        var serverBaseUrl = "insert base url";

        return service;
        var accessToken = "";
        function sendHttpRequest(serverUrl, parameters, methodType, successCallback , errorCallback) {
            var url = serverBaseUrl + serverUrl;
            var deferred = $q.defer();
            $http({
                method: methodType,
                params: parameters,
                url: url,
                headers: getHeaders(),
            }).success(function (data, status, headers, cfs) {
                deferred.resolve(data, status, headers, cfs);
                if (successCallback) {
                    successCallback(data);
                }
            }).error(function (err, status) {
                //if ($scope.errorAlert) {
                if (status == 404) {
                    alert("לא נמצאה פונקציה תואמת בשרת. אנא בדוק פרמטר תחילית של פניה לשרת או  ESSyncService  אינו מוגדר תקין  ב IIS \n יש לשים לב ש APPLICATION POOL מוגדר ל FRAMEWORK 4 \n יש לשים לב שהכול מאופשר באתר ברירת מחדל ב ISAPI ");
                    // $scope.errorAlert = true;
                    // $location.url("/error");
                    return;
                }
                if (status == 403) {
                    alert("השרת דורש פניה מאובטחת ולכן לא מתקבלות תואצות. אנא הגדר את השרת בהתאם");
                    //$rootScope.errorAlert = false;
                    return;
                }
                //if (status == 500) {
                //    alert("נא לבדוק הגדרות של \n ISAPI Filters in IIS \n כנראה לא מאופשר \n framework 4");
                //    //$rootScope.errorAlert = false;
                //    return;
                //}
                //}
                if (errorCallback)
                    errorCallback(err, status, deferred);
                else
                    deferred.reject(err, status);
                console.log(err);
            });
            return deferred.promise;
        }

        function postHttpRequest(serverUrl, parameters, successCallback, errorCallback) {
            var url = serverBaseUrl + serverUrl;
            var deferred = $q.defer();
            $http({
                method: 'POST',
                data: { data: JSON.stringify(parameters) },
                url: url,
                headers: getHeaders(),
            }).success(function (data, status, headers, cfs) {
                deferred.resolve(data);
                if (successCallback) {
                    successCallback(data);
                }
            }).error(function (err, status) {
                if (errorCallback)
                    errorCallback(err, status, deferred);
                else
                    deferred.reject(err, status);
                console.log(err);

            });
            return deferred.promise;
        }

        function postRequest(serverUrl, data, successCallback) {
            return $http.post(serverBaseUrl + serverUrl,
            JSON.stringify(data),
            { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }

        function getHeaders() {
            if (accessToken) {
                return { "Authorization": "Bearer " + accessToken };
            }
        }
    }
})();