angular.module('bankAuthentication', [])
  .controller('MainCtrl', [
  '$scope', '$http', '$timeout',
  function($scope, $http ,$timeout){
    $scope.title = 'Banking Authentication Service';
    $scope.bankName = 'wells';
    $scope.usr = '';
    $scope.pwd = '';
    $scope.http = $http;
    $scope.endpoint = "http://localhost:3000/signup/authenticate";
    $scope.showError = false;
    $scope.modals= {modal1: false, modal2: false, modal3: false};

    $scope.showModal1 = function () {
      $scope.modals.modal1 = true;
    };

    $scope.closeModal1 = function () {
      $scope.modals.modal1 = false;
    };

    $scope.showModal2 = function () {
      $scope.modals.modal2 = true;
    };

    $scope.closeModal2 = function () {
      $scope.modals.modal2 = false;
    };

    $scope.showModal3 = function () {
      $scope.modals.modal3 = true;
    };

    $scope.closeModal3 = function () {
      $scope.modals.modal3 = false;
    };

    $scope.showModal4 = function () {
      $scope.modals.modal4 = true;
    };

    $scope.closeModal4 = function () {
      $scope.modals.modal4 = false;
    };
    $scope.setBank = function(name) {
      $scope.bankName = name;
    };

    $scope.sendCredentials = function() {
      //if ($scope.bankName != '' && $scope.usr != '' && $scope.pwd != '') {
        var data = { bank: $scope.bankName, username: $scope.usr, password: $scope.pwd };
        $http.post($scope.endpoint, data).then(function (data) {
            console.log(data);

          $scope.closeModal1();
          $scope.showModal2();
            if (data.data.thing != null) {
              console.log(data);
            }
          },
        function(err) {
          $scope.showError = true;
          // alert('Check credentials')
        })
      //}
    };

    $scope.pickAccount = function() {
      $scope.closeModal2();
      $scope.showModal3();
    }

  $scope.submitMoney = function() {
      $scope.closeModal3();
      $scope.showModal4();
    }


}]);