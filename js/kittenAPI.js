var app = angular.module('myModule');

app.controller("kittenAPI", function($scope, $http) {
  $http({
    method: "GET",
    url: "https://nijikokun-random-cats.p.mashape.com/random/kitten",
    headers: {
      "X-Mashape-Key": "",
      "Accept" : "application/json"
    }
}).then(function(response){

  $scope.img = response.data.source;
  console.log($scope.img);
})
  });
