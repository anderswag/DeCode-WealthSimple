angular.module('bankAuthentication', [])
  .controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.title = 'Banking Authentication Service';
    $scope.bankName = '';
    $scope.usr = '';
    $scope.pwd = '';
    $scope.http = $http;
    $scope.endpoint = "http://localhost:3000/signup/authenticate"
    
    $scope.sendCredentials = function() {
      if ($scope.bankName != '' && $scope.usr != '' && $scope.pwd != '') {
        var data = { bank: $scope.bankName, username: $scope.usr, password: $scope.pwd };
        $http.post($scope.endpoint, data).then(function (data) {
            if (data.data.thing != null) {
              console.log(data);
            } 
          },
        function(err) {
          alert("Could not find accounts, please try again");
        })
      }
    }
}]);