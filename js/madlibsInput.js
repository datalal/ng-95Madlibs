var app = angular.module('myModule');

app.controller("madlibsInput", function($scope, ourFactory, $location) {

    $scope.grabInput = function(userInput) {

        console.log(userInput);

        ourFactory.sendInfo(userInput);

        $location.path('/output');

    };
});
