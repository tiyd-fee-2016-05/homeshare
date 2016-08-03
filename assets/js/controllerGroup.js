mainApp.controller( "ControllerGroup", [ "$scope", function( $scope ) {

  // for group.html...will be used to toggle the display of user stats...NOT USED AND CONVERTED TO NEXT PHASE GOAL
  $( ".group-member" ).click( function() {
    console.log( "Hello" );
    $( ".member-stats" ).slideToggle();

    /*
      thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
      used to slide page up if info is below fold
    */
    $( "html, body" ).animate( { scrollTop: $(document).height() }, 'slow' );
    return false;
  }); // end ".user-avatar" click event
}]);
