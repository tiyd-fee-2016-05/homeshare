mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){
$scope.data;

  $scope.submitForm = function() {
          // console.log($scope.choreName);
          $scope.form = {
            "name": $scope.choreName,
            "description": $scope.choreDesc,
            "value": $scope.choreValue
          };
          console.log($scope.form);
    $http({
      url: 'http://d6c901d4.ngrok.io/homes/1/chores/new.json?name= ' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.choreValue ,
      method: 'GET',
      data: 'formData'
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.data);

    });
};
$http({
  url: 'http://d6c901d4.ngrok.io/homes/1/chores.json',
  method: 'GET'
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});
    }]);

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
          url: 'http://d6c901d4.ngrok.io/homes/new.json?name= ' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'GET',
          data: 'formData',
          headers: {'Authorization': 'ty@example.com'}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });
      };
  }]);

//     mainApp.controller('admin',function($scope, $http){
//       $http({
//         method: 'GET',
//         url: 'http://a48f6bd3.ngrok.io/homes/1/chores/1.json',
//       }).success(function(data){
//         $scope.data = data.data;
//         console.log($scope.data);
//         // console.log(data.data);
//       });
// });
// });




  
