angular.module('bankAuthentication', [])
  .controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.title = 'Banking Authentication Service';
    $scope.usr = '';
    $scope.pwd = '';
    $scope.http = $http;
    $scope.endpoint = "http://google.ca"
    
    $scope.sendCredentials = function() {
      var username = $scope.usr;
      var password = $scope.pwd;
      var http = $scope.http;
      http.get($scope.endpoint).then(function (data) {
        console.log(data);
      },
      function(err) {
        console.log(data);
      }
      )
    }
}]);