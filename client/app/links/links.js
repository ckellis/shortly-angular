angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  if (!Auth.isAuth()) {
    $location.path('/signin');
  } else {
    Links.getAll().then(function (links) {
      $scope.data.links = links;
    });
    $scope.signOut = function () {
      Auth.signout();
    };
  }
});
