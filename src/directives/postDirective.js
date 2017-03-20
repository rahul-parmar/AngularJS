angular.module('MyApp.directives')
    .directive('postDataInfo',[
        function () {
            'use strict';
            return{
                restrict: 'E',
                templateUrl:'../screenshots/AngularJS/src/partials/postdata.html',
                scope:{
                    post: '='
                },
                 link: function () {
                /*your code */
                }
            };
         }]);
