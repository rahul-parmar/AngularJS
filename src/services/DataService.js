angular.module('MyApp.services').factory('DataService', [
        function () {
        'use strict';
        var model = {
            address: {
                city: ''
                , state: ''
            }
            , addData: function (newData) {
                this.address = newData;
            }
        }
        return {
            model: model
        }
         }]);