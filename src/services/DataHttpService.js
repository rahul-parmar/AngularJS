angular.module('MyApp.services')
    .service('DataHttpService',['$http',
        function ($http) {
            'use strict';
            return $http({
                method:'GET',
                url:'http://jsonplaceholder.typicode.com/posts'})
         }]);
