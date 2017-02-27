var app = angular.module('myModule');

app.controller("redditCtrl", function($scope,$http) {
  $http.get("https://www.reddit.com/r/awww.json")
  .then(function(response) {


    $scope.arrayTest = response.data.data.children;


// function calcHoursPosted(i){
// var myDate = new Date(1000*i);
// $scope.hoursPosted = myDate.getHours();
// return i;
// console.log("cal chours");
//}

  }, function(response) {

    $scope.content = "Something went wrong";
  });
});
