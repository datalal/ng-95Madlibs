var app = angular.module('myModule');
app.controller("inputCtrl", function($scope) {

    $scope.hello = "whoa";
    $scope.stylesheet = "style";
    $scope.noun1 = "TEST";
    $scope.programName = "ng-photoViewer 3.1";




});

var today = new Date();
var h = today.getHours();
var ampmVal = "";
  var newH;

function startTime() {
    var m = today.getMinutes();
    m = checkTime(m);
    newH = amPm(h);
    document.getElementById('clock').textContent =
        newH + ":" + m + "" + ampmVal;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

function amPm(j) {
    if (j < 12) {
        ampmVal = "am";
    } else if (j > 12) {
        ampmVal = "pm";
        j -= 12;
    } else {
        ampmVal = "pm";
    };
    return j;
}

function closeWindow(){

console.log("CLOSED TEST");

}
