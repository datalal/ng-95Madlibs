var app = angular.module('myModule', ["ngRoute"]);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/cat", {
            controller: "inputCtrl",
            templateUrl: "views/cat.html"
        })
        .when("/dog", {
            controller: "inputCtrl",
            templateUrl: "views/dog.html"
        })
        .when("/dog2", {
          redirectTo: "/"

        })
        .when("/hobbes", {
            controller: "inputCtrl",
            templateUrl: "views/hobbes.html"
        })
        .when("/hobbes2", {
            controller: "inputCtrl",
            templateUrl: "views/hobbes2.html"
        })
        .when("/hobbes3", {
            controller: "inputCtrl",
            templateUrl: "views/hobbes3.html"
        })
        .when("/madlibs", {
            controller: "madlibsInput",
            templateUrl: "views/madlibs.html"
        })
        .when("/output", {
            controller: "outputCtrl",
            templateUrl: "views/output.html"
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.hashPrefix("");

});
