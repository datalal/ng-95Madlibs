var app = angular.module('myModule');
app.controller("inputCtrl", function($scope) {

    $scope.hello = "whoa";
    $scope.stylesheet = "style";
    $scope.noun1 = "TEST";
    $scope.programName = "ng-photoViewer 3.1";

    function loadMadlibs() {

        $scope.programName = "ng-Madlibs 2.1";
        console.log($scope.programName);

    }

});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').textContent =
        h + ":" + m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}
