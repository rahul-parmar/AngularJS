angular.module('MyApp.controllers')
    .controller('DataCtrl',['$scope','DataService',
        function ($scope,DataService) {
            'use strict';
            $scope.model=DataService.model.address;
         }]);
