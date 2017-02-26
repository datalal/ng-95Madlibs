var app = angular.module('myModule');

app.controller("redditCtrl", function($scope,$http) {
  $http.get("https://www.reddit.com/r/awww.json")
  .then(function(response) {

for (i = 0; i < 10; i++){
    $scope.content = response.data.data;
    $scope.title = response.data.data.children[0].data.title;
    $scope.domain = response.data.data.children[0].data.domain;
    $scope.comments = response.data.data.children[0].data.num_comments;
    $scope.author = response.data.data.children[0].data.author;
    $scope.thumbnail = response.data.data.children[0].data.thumbnail;
    $scope.permalink = response.data.data.children[0].data.permalink;
    $scope.arrayTest = response.data.data.children;

}

// var myDate = new Date(1000*$blogDate);


  }, function(response) {

    $scope.content = "Something went wrong";
  });
});
