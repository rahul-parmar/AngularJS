angular.module('MyApp.controllers')
    .controller('DataHttpCtrl',['$scope','DataHttpService',
        function ($scope,DataHttpService) {
            'use strict';
            var promise=DataHttpService;
            promise.then(function(posts){
                $scope.posts=posts.data;
            }).catch(function(reason){
                alert(reason);
                
            }).finally(function(){
                console.log('Inside Finally')
            })
         }]);
