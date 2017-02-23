var app = angular.module('myModule');

app.controller('ourCtrl', function($scope) {
            ourFactory.ourFunction(argument);
        });

        app.factory('ourFactory', function() {
            var myObj = {};

            return {
                sendInfo: function(userInput) {
                    console.log(userInput);
                    myObj = userInput;

                },
                getInfo: function() {
                    return myObj;
                }

            }

        });
