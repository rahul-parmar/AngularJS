angular.module('MyApp.controllers').controller('FormCtrl', ['$scope', 'DataService'    
    , function ($scope, DataService) {
        'use strict';
        $scope.change = function () {
            if ($scope.checked) {
                $scope.newmodel = DataService.model.address;
            }
            else {
                $scope.newmodel = {};
            }
        }
         }]);