
//CHORE ADMIN CONTROLLER

mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){

// var text = "$scope.user_token";
  $scope.submitForm = function() {
    // console.log($scope.choreName);
    $scope.form = {
      'name': $scope.choreName,
      'description': $scope.choreDesc,
      'chore_xp': $scope.chore_xp
    };
    console.log($scope.form);
    $http({
      url: 'http://f6ed491e.ngrok.io/users/me/homes/1/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.chore_xp ,
      method: 'POST',
      headers: {"Authorization":text},
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);
    });

    jQuery( ".chore-name-input" ).val("");
    jQuery( ".chore-area-input" ).val("");
    jQuery( ".chore-points-input" ).val("");

  }; // end submitForm click event
$http({
  url: 'https://46522539.ngrok.io/homes/1/chores',
  method: 'GET',
  headers: {'Authorization': 'maria@example.com'}
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});
// $http({
//   url: 'http://f6ed491e.ngrok.io/users/me/homes/1/chores',
//   method: 'GET',
//   headers: {"Authorization":$scope.user_token}
// }).success(function(data){
//   $scope.totalChores = data;
//   console.log($scope.totalChores);
//
// });

    }]);

    //HOUSEHOLD SETUP CONTROLLER

    mainApp.controller("hhController", ['$scope', '$http', function($scope, $http){
      $scope.submitForm = function() {

        // console.log($scope.choreName);
        $scope.form = {
          "name": $scope.hhName,
          "city": $scope.hhDesc,
          "value": $scope.hhRent
        };
        console.log($scope.form);

        $http({
          url: 'http://f6ed491e.ngrok.io/users/me/homes?name=' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'POST',
          data: $scope.form,
          headers: {"Authorization":$scope.user_token}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });

        jQuery( ".house-name-input" ).val("");
        jQuery( ".house-location-input" ).val("");
        jQuery( ".house-rent-input" ).val("");

      }; // end submitForm click event

      $http({
        url: 'http://f6ed491e.ngrok.io/users/me/homes/',
        method: 'GET',
        headers: {"Authorization":$scope.user_token}
      }).success(function(data){
        $scope.home_id = data.data;
        console.log($scope.home_id);

      });

  }]);



//OPTIONS POP OUT
mainApp.controller( "optionsController", [ "$scope", "$timeout", function( $scope, $timeout ) {
//Close pannel
$(window).ready(function () {

   $(".options").hide();
 });
//Accordion menu
  $( ".fa-cog" ).click( function() {
    console.log( "Hello" );
    $( ".options" ).slideToggle();

    // thank you, http://www.w3schools.com/angular/tryit.asp?filename=try_ng_services_timeout, for help with the timeout service!!!
    $timeout( function() {
      $( ".options" ).slideToggle();
    }, 3500 );

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    // $( "html, body" ).animate( { scrollTop: $(document).width() }, 'slow' );
    // return false;
  }); // end cog click event

  jQuery( ".nav-element" ).click( function() {
    jQuery( ".options" ).slideToggle();
  }) // end .nav-element click event
}]);

//DROPDOWN MENU THAT POPULATES CHORES list
//Thanks very much, https://aspdotnetcodehelp.wordpress.com/2015/08/08/how-to-populate-dropdownlist-from-database-using-angularjs-ng-options-attribute/
mainApp.controller('drpdwnCtrl',['$scope','$http' , function ($scope, $http) {
            $scope.ChoreList = null;
            //Declaring the function to load data from database
            $scope.fillChoreList = function () {
                $http({
                    method: 'POST',
                    url: 'http://f6ed491e.ngrok.io/users/me/homes/1/chores',
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
