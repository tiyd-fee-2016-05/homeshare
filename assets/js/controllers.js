
mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){
  // $scope.choreName = item.item1;
  // $scope.choreDesc = item2;
  var data = {};
  $scope.submitForm = function() {
          // console.log($scope.choreName);
          formData = $scope.form;
          // console.log(formData);
    $http({
      url: 'http://d6c901d4.ngrok.io/homes/1/chores/new/?name= ' + "sweep" + '&description=' + "house" + '&value=50',
      method: 'GET',
      data: 'formData'
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.data);
      // console.log(data.data);
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




  // // gentooApp.controller('ProfileCtrl', function ($scope, $http) {
  //          $scope.addProfile = function() {
  //          console.log("posting data....");
  //         //  profileData = $scope.profile;
  //         //  console.log(profileData);
  //          $scope.message="message";
  //          $http({
  //           url: 'http://a48f6bd3.ngrok.io/homes/1/chores/',
  //           method: "POST",
  //           // data: profileData,
  //           // headers: {'Authorization': 'sinovia'}
  //       }).success(function (data, status, headers, config) {
  //               $scope.chores = data;
  //           }).error(function (data, status, headers, config) {
  //               $scope.status = status;
  //           });
  //      };
