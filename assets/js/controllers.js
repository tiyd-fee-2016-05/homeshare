
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
      url: 'http://tiy-homeshare.herokuapp.com/homes/1/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.chore_xp ,
      method: 'POST',
      headers: {'Authorization':'maria@example.com'},
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);

    });
};
$http({
  url: 'http://tiy-homeshare.herokuapp.com/homes/1/chores',
  method: 'GET',
  headers: {'Authorization': 'maria@example.com'}
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
                "city": $scope.hhDesc,
                "value": $scope.hhRent
              };
              console.log($scope.form);
        $http({
          url: 'http://tiy-homeshare.herokuapp.com/homes?name=' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'POST',
          data: $scope.form,
          headers: {'Authorization': 'maria@example.com'}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });
      };

      $http({
        url: 'http://tiy-homeshare.herokuapp.com/homes/',
        method: 'GET',
        headers: {'Authorization': 'maria@example.com'}
      }).success(function(data){
        $scope.home_id = data;
        console.log($scope.home_id);

      });

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
        url: 'http://tiy-homeshare.herokuapp.com/homes/1/users',
        method: 'POST',
        data: $scope.form,
        headers: {'Authorization':'maria@example.com'}
      }).success(function(data){
        alert("WELCOME HOME!");
        $scope.data = data.data;
        console.log($scope.data);
      });
    };

    $http({
      url: 'http://tiy-homeshare.herokuapp.com/homes/1/users',
      method: 'GET',
      headers: {'Authorization': 'maria@example.com'}
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.data);

    });


}]);

//OPTIONS POP OUT
mainApp.controller( "optionsController", [ "$scope", function( $scope ) {
//Close pannel
$(window).ready(function () {

   $(".options").hide()
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
