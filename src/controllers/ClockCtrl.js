angular.module('MyApp.controllers')
    .controller('ClockCtrl',['$scope','$interval',
        function ($scope, $interval) {
            'use strict';
            $scope.model={
                now:new Date()
            }
            
            var update = function(){
                $scope.model.now=new Date();
            }
            
            /*setInterval(function(){
                //update()
                $scope.$apply(update)
            },1000);*/
            $interval(function(){
                update();
            },1000)
            $scope.$watch("model.now",function(newValue, oldValue){
                console.log("Old Value: "+ oldValue + " New value: " + newValue)
            })
            /*setInterval(update,1000);*/
         }]);
