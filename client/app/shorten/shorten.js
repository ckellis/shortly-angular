angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.link = {};
  $scope.addLink = function () {
    $scope.waiting = true;
    Links.addOne($scope.link).then(function () {
      $scope.waiting = false;
      $location.path('/links');
    });
  };
  $scope.signOut = function () {
    Auth.signout();
  };
});
