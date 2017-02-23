var app = angular.module('myModule');

app.controller('outputCtrl', function($scope, ourFactory) {

    $scope.userInput = ourFactory.getInfo();


});
