mainApp.controller( "ControllerGroup", [ "$scope", function( $scope ) {

  $( ".group-member" ).click( function() {
    console.log( "Hello" );
    $( ".member-stats" ).slideToggle();
  }); // end ".user-avatar" click event

}]);
