mainApp.controller( "ControllerGroup", [ "$scope", function( $scope ) {

  // used to aid in drop down of member's stats list on group.html.  Initially set to false so list will not display on load.
  $scope.showStats = false;

  $(".user-avatar").click(function() {
    console.log( "Hello" );
  }); // end ".user-avatar" click event

}]);
