angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    $scope.waiting = true;
    Links.addOne($scope.link).then(function () {
      $scope.waiting = false;
      $location.path('/links');
    });
  };
});
