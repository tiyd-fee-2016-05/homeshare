mainApp.controller( "ControllerGroup", [ "$scope", function( $scope ) {

  $( ".group-member" ).click( function() {
    console.log( "Hello" );
    $( ".member-stats" ).slideToggle();

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    $( "html, body" ).animate( { scrollTop: $(document).height() }, 'slow' );
    return false;
  }); // end ".user-avatar" click event
}]);
