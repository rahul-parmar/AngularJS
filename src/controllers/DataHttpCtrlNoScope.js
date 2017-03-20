angular.module('MyApp.controllers')
    .controller('DataHttpCtrl',['DataHttpService',
        function (DataHttpService) {
            'use strict';
            var vm=this;
            var promise=DataHttpService;
            promise.then(function(posts){
                vm.posts=posts.data;
            }).catch(function(reason){
                alert(reason);
                
            }).finally(function(){
                console.log('Inside Finally')
            })
         }]);
