
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
      url: 'https://tiy-homeshare.herokuapp.com/homes/26/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&chore_xp=' + $scope.chore_xp , // Travis'
      method: 'POST',
      headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) },
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
  url: 'https://tiy-homeshare.herokuapp.com/homes/26/chores', // Travis'
  method: 'GET',
  headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  }) // end request
  .success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

  }); // end success

//   url: 'http://tiy-homeshare.herokuapp.com/users/me/homes/1/chores',
//   method: 'GET',
//   headers: {"Authorization":$scope.user_token}
// }).success(function(data){
//   $scope.totalChores = data;
//   console.log($scope.totalChores);
//
// });
}]); // not sure what this is for

    //HOUSEHOLD SETUP CONTROLLER

    mainApp.controller("hhController", ['$scope', '$http', function($scope, $http){
      $scope.submitForm = function() {

        // console.log($scope.choreName);
        $scope.form = {
          "name": $scope.hhName,
          "city": $scope.hhCity,
          "value": $scope.hhRent
        };
        console.log($scope.form);

        $http({
          url: 'https://tiy-homeshare.herokuapp.com/homes?name=' + $scope.hhName + '&city=' + $scope.hhCity + '&rent=' + $scope.hhRent , // Travis'
          method: 'POST',
          data: $scope.form,
          headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
        }).success(function(data){
          $scope.homes = data.homes.all_homes[0];
          console.log($scope.homes[$scope.homes.length -1]);

        });

        jQuery( ".house-name-input" ).val("");
        jQuery( ".house-location-input" ).val("");
        jQuery( ".house-rent-input" ).val("");

      }; // end submitForm click event

      $http({
        url: 'https://tiy-homeshare.herokuapp.com/homes/', // Travis'
        method: 'GET',
        headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
      }).success(function(data){
        $scope.home_id = data.homes.all_homes.id;
        console.log($scope.home_id);
      }); // end success
  }]); // end hhController

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
}]); // end optionsController

//DROPDOWN MENU THAT POPULATES CHORES list
//Thanks very much, https://aspdotnetcodehelp.wordpress.com/2015/08/08/how-to-populate-dropdownlist-from-database-using-angularjs-ng-options-attribute/
mainApp.controller('drpdwnCtrl',['$scope','$http' , function ( $scope, $http) {
  // $scope.ChoreList = null;
  //Declaring the function to load data from database
  $scope.fillChoreList = function () {
      $http({
          method: 'GET',
          url: 'https://tiy-homeshare.herokuapp.com/homes/26/completed_chores', // Travis'
          // data: $scope.ChoreList,
          headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
      }).success(function (result) {
          $scope.completeChoreList = result.chores.completed;
          $scope.chorePoints = result.chores.completed.chore_xp;
          console.log($scope.completeChoreList);
      });
  };
  // Calling the function to load the data on pageload
  $scope.fillChoreList();
}]); // end drpdwnCtrl


// AVATAR DISPLAY MAIN MENU CONTROLLER
mainApp.controller('avatardisplay',['$rootScope','$scope','$http' , function ($rootScope, $scope, $http) {

  $( window ).load(function() {

  console.log( JSON.parse(localStorage.getItem( "user_token")) + " is a " + typeof localStorage.getItem( "user_token") );
  $http({
    url: 'http://tiy-homeshare.herokuapp.com/users/me', // Erik's
    method: 'GET',
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  }).success( function(data) {
    $scope.avatar = data.user.housemate.avatar;
    console.log( data );
    // $scope.totalChores = data.chores.incomplete;
    }); // end GET GET success
  }); // end on load event
}]); // end avatardisplay



        //XP BAR CONTROLLER

        // mainApp.controller("xpBar", ['$scope', '$http', function($scope, $http){
        //
        //     $http({
        //       url: 'http://tiy-homeshare.herokuapp.com/users/24',
        //       method: 'GET',
        //       headers: {"Authorization": ""},
        //     }).success(function(data){
        //       $scope.xp = data.user.housemate.total_exp;
        //       console.log(data.user.housemate.total_exp);
        //       $(function(){
        //         setTimeout(function(e){
        //           $(".progress").removeClass("none");
        //           $(".progress").addClass("thirty");
        //         }, 1000);
        //       });
        //     });
        //   }]);

        // XP BAR CONTROLLER

        mainApp.controller("xpBar", ['$scope', '$http', function($scope, $http){

            $http({
              url: 'https://tiy-homeshare.herokuapp.com/users/me',
              method: 'GET',
              headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
            }).success(function(data){
              $scope.xp = data.user.total_exp;
              $scope.percent = data.user.homes_percent;
              console.log($scope.xp);
              console.log($scope.percent);

              // $(function(){
              //
              //     $( "#progressbar" ).progressbar({
              //         value: $scope.xp
              //     });
              // });
            });
        }]);





// House Name Display
        mainApp.controller("homeName", ['$scope', '$http', function($scope, $http){

            $http({
              url: 'https://tiy-homeshare.herokuapp.com/homes/26',
              method: 'GET',
              headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
            }).success(function(data){
              $scope.homeName = data.home.info.name;
              console.log($scope.homeName);


            });
        }]);
