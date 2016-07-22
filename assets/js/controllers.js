
//CHORE ADMIN CONTROLLER

mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){


  $scope.submitForm = function() {
          // console.log($scope.choreName);
          $scope.form = {
            "name": $scope.choreName,
            "description": $scope.choreDesc,
            "value": $scope.choreValue
          };
          console.log($scope.form);
    $http({
      url: 'http://d6c901d4.ngrok.io/homes/1/chores.json?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.choreValue ,
      method: 'POST',
      data: 'formData'
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.data);

    });
};
$http({
  url: 'http://d6c901d4.ngrok.io/homes/1/chores',
  method: 'GET',
  headers: 'authorization: maria@example.com'
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});
    }]);

    //HOUSEHOLD SETUP CONTROLLER

    mainApp.controller("hhController", ['$scope', '$http', function($scope, $http){
      $scope.submitForm = function() {
              // console.log($scope.choreName);
              $scope.form = {
                "name": $scope.hhName,
                "description": $scope.hhDesc,
                "value": $scope.hhRent
              };
              console.log($scope.form);
        $http({
          url: 'http://d6c901d4.ngrok.io/homes?name=' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'POST',
          data: 'formData',
          // headers: {'Authorization': 'ty@example.com'}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });
      };


  }]);

  //SIGNUP CONTROLLER
  mainApp.controller('signupController', ['$scope', '$http', function($scope, $http){
    // var user = {"user":{"email":"maria@example.com","password":"password"}};

    $scope.submitForm = function(){
      $scope.form = {
        "email": $scope.suEmail,
        "password": $scope.suPassword
      };
      console.log($scope.form);
      $http({
        url: 'http://d6c901d4.ngrok.io/home/1/users',
        method: 'POST',

      }).success(function(data){
        alert("WELCOME HOME!");
        $scope.data = data.data;
        console.log($scope.data);
      });
    };

}]);
