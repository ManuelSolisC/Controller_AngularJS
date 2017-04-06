var app = angular.module("Controllers_AngularJS", []);
app.controller("Users", function($scope) {
    $scope.Object = [
      {Name : " Manuel ", LastName : " Solis "},
      {Name : " Maximiliano ",  LastName : " Solis "},
      {Name : " Diego ", LastName : " Solis "}
    ];
});
