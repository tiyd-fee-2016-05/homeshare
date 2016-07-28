
//CHORE ADMIN CONTROLLER

mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){


  $scope.submitForm = function() {
          // console.log($scope.choreName);
          $scope.form = {
            'name': $scope.choreName,
            'description': $scope.choreDesc,
            'chore_xp': $scope.chore_xp
          };
          console.log($scope.form);
    $http({
      url: 'https://tiy-homeshare.herokuapp.com/homes/1/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.chore_xp ,
      method: 'POST',
      headers: {"Authorization": $scope.user_token},
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);

    });
};
// $http({
//   url: 'https://tiy-homeshare.herokuapp.com/homes/1/chores',
//   method: 'GET',
//   headers: {"Authorization":$scope.user_token}
// }).success(function(data){
//   $scope.totalChores = data;
//   console.log($scope.totalChores);
//
// });
    }]);

    //HOUSEHOLD SETUP CONTROLLER

    mainApp.controller("hhController", ['$rootScope','$scope', '$http', function($rootScope, $scope, $http){
      $scope.submitForm = function() {
              // console.log($scope.choreName);
              $scope.form = {
                "name": $scope.hhName,
                "city": $scope.hhDesc,
                "value": $scope.hhRent
              };
              console.log($scope.form);


        $http({
          url: 'https://tiy-homeshare.herokuapp.com/homes?name=' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'POST',
          data: $scope.form,
          headers: {"Authorization":$scope.user_token}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });
      };

      $http({
        url: 'https://tiy-homeshare.herokuapp.com/homes/',
        method: 'GET',
        headers: {"Authorization":$scope.user_token}
      }).success(function(data){
        $scope.home_id = data.data;
        console.log($scope.home_id);

      });

  }]);



//OPTIONS POP OUT
mainApp.controller( "optionsController", [ "$scope", function( $scope ) {
//Close pannel
$(window).ready(function () {

   $(".options").hide();
 });
//Accordion menu
  $( ".fa-cog" ).click( function() {
    console.log( "Hello" );
    $( ".options" ).slideToggle();

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    // $( "html, body" ).animate( { scrollTop: $(document).width() }, 'slow' );
    // return false;
  }); // end ".user-avatar" click event
}]);

//DROPDOWN MENU THAT POPULATES CHORES list
//Thanks very much, https://aspdotnetcodehelp.wordpress.com/2015/08/08/how-to-populate-dropdownlist-from-database-using-angularjs-ng-options-attribute/
mainApp.controller('drpdwnCtrl',['$rootScope','$scope','$http' , function ($rootScope, $scope, $http) {
            $scope.ChoreList = null;
            //Declaring the function to load data from database
            $scope.fillChoreList = function () {
                $http({
                    method: 'POST',
                    url: 'https://tiy-homeshare.herokuapp.com/homes/1/chores',
                    data: $scope.ChoreList,
                    headers: {"Authorization":$scope.user_token}
                }).success(function (result) {
                    $scope.ChoreList = result.chores.incomplete;
                    console.log($scope.ChoreList);
                });
            };
            //Calling the function to load the data on pageload
            $scope.fillChoreList();
        }]);


        //XP BAR CONTROLLER

        mainApp.controller("xpBar", ['$scope', '$http', function($scope, $http){

            $http({
              url: 'http://f6ed491e.ngrok.io/users/24',
              method: 'GET',
              headers: {"Authorization": "f2ad6619-eaf6-49e1-862a-a7dc1d6b2af8"},
            }).success(function(data){
              $scope.xp = data.user.housemate.total_exp;
              console.log($scope.xp);

            });
          }]);
