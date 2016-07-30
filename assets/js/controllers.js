
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
      url: 'https://tiy-homeshare.herokuapp.com/homes/15/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&chore_xp=' + $scope.chore_xp ,
      method: 'POST',
      headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) },
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
  url: 'https://tiy-homeshare.herokuapp.com/homes/15/chores',
  method: 'GET',
  headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});


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
          headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });

        jQuery( ".house-name-input" ).val("");
        jQuery( ".house-location-input" ).val("");
        jQuery( ".house-rent-input" ).val("");

      }; // end submitForm click event

      $http({
        url: 'https://tiy-homeshare.herokuapp.com/homes/',
        method: 'GET',
        headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
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

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    // $( "html, body" ).animate( { scrollTop: $(document).width() }, 'slow' );
    // return false;
  }); // end cog click event

  jQuery( ".nav-element" ).click( function() {
    jQuery( ".options" ).slideToggle();
  }); // end .nav-element click event
}]);

//DROPDOWN MENU THAT POPULATES CHORES list
//Thanks very much, https://aspdotnetcodehelp.wordpress.com/2015/08/08/how-to-populate-dropdownlist-from-database-using-angularjs-ng-options-attribute/
mainApp.controller('drpdwnCtrl',['$rootScope','$scope','$http' , function ($rootScope, $scope, $http) {
            $scope.ChoreList = null;
            //Declaring the function to load data from database
            $scope.fillChoreList = function () {
                $http({
                    method: 'POST',
                    url: 'https://tiy-homeshare.herokuapp.com/homes/15/chores',
                    data: $scope.ChoreList,
                    headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
                }).success(function (result) {
                    $scope.ChoreList = result.chores.incomplete;
                    console.log($scope.ChoreList);
                });
            };
            //Calling the function to load the data on pageload
            $scope.fillChoreList();
        }]);


// AVATAR DISPLAY MAIN MENU CONTROLLER
mainApp.controller('avatardisplay',['$rootScope','$scope','$http' , function ($rootScope, $scope, $http) {

$( window ).load(function() {

  console.log( JSON.parse(localStorage.getItem( "user_token")) + " is a " + typeof localStorage.getItem( "user_token") );
  $http({
    url: 'https://tiy-homeshare.herokuapp.com/users/me',
    method: 'GET',
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  }).success( function(data) {

    $scope.avatar = data.user.housemate.avatar;
    console.log( $scope.avatar );
    // $scope.totalChores = data.chores.incomplete;
  }); // end GET GET success
}); // end on load event

  }]);


        // XP BAR CONTROLLER
        //
        // mainApp.controller("xpBar", ['$scope', '$http', function($scope, $http){
        //
        //     $http({
        //       url: 'https://tiy-homeshare.herokuapp.com/users',
        //       method: 'GET',
        //       headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
        //     }).success(function(data){
        //       $scope.xp = data.user.total_exp;
        //       console.log(data.user.total_exp);
        //       $(function(){
        //         setTimeout(function(e){
        //           $(".progress").removeClass("none");
        //           $(".progress").addClass("thirty");
        //         }, 1000);
        //       });
        //     });
        //   }]);
