angular.module('bankAuthentication', [])
  .controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.title = 'Banking Authentication Service';
    $scope.usr = '';
    $scope.pwd = '';
    $scope.http = $http;
    $scope.endpoint = "http://localhost:3000/signup/authenticate"
    
    $scope.sendCredentials = function() {
      var data = { username: $scope.usr, password: $scope.pwd };
      $http.post($scope.endpoint, data).then(function (data) {
        console.log(data);
      },
      function(err) {
        console.log(data);
      }
      )
    }
}]);