var app = angular.module('myModule');
app.controller("fizzBuzzCtrl", function($scope) {

    $scope.fizzBuzzResult = function(fizzBuzzNumber) {

        if (fizzBuzzNumber % 15 === 0) {

            return "FIZZ BUZZ!!!";

        } else if (fizzBuzzNumber % 3 === 0) {

            return "FIZZ";
        } else if (fizzBuzzNumber % 5 === 0) {

            return "BUZZ";


        }

    };


});


app.directive('fizz', function() {

    return {
        restrict: "EACM",
        template: "<h1>Fizz!</h1>",
        replace: false
    };

});

app.directive('fizzBuzzImage', function() {

    return {
        restrict: "EACM",
        template: "<img id='imgTest' src='http://www.dr-mikes-math-games-for-kids.com/linkimgs/PIC-fizzbuzz.png' width='50px'>",
        replace: false
    };

});


app.directive('fizzBuzzTitle', function() {

    return {
        restrict: "EACM",
        template: "<h1>fizzBuzz!</h1>",
        replace: false
    };

});
