mainApp.controller( "ControllerSignup", [ "$scope", "$http", function( $scope, $http ) {

  $scope.submitForm = function() {

    $scope.form = {
      "email": $scope.suEmail,
      "password": $scope.suPassword,
      // "venmo": $scope.suVenmo
    }; // end $scope.form assignment

    console.log( $scope.form );
// rokuapp.com/homes/1/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.chore_xp
    $http( {
      url: "http://tiy-homeshare.herokuapp.com/homes/1/users?email=" + $scope.suEmail + "&password=" + $scope.suPassword,
      method: "POST",
      data: $scope.form
    }) // end $http request
    .success( function( data ) {
      alert( "WELCOME HOME!" );
      console.log( data.data );
    }); // end .success
  }; // end submitForm click event

}]); // end ControllerChores
