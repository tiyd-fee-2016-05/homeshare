mainApp.controller( "ControllerAvatar", [ "$scope", function( $scope ) {

  // used to aid in drop down of chore list on profile-edit.html.  Initially set to false so list will not display on load.
  $scope.showChores = false;

  // Click the right arrow and the picture will change to the next one.
  // We will need an array of images to iterate through.
  // We will also need a variable to hold the current avatar with the index of the click variable.
  // Ergo, we need a click variable.
  // If the right arrow is clicked, the click count is increased by one.  This number corresponds to the position in the array.
  // On load, the default picture is index 0.
  // If the left arrow is clicked, the click count will decrease by one.  If click is less than 0, click will be set to 8 (or array.length - 1).
  // If the click is greater than the length of the picture array - 1, the click is then set to 0.

  // list of all avatars available
  $scope.avatars = [
   "assets/images/avatar.png",
   "assets/images/avatar-1.png",
   "assets/images/avatar-2.png",
   "assets/images/japanese.png",
   "assets/images/boy-1.png",
   "assets/images/santa-claus.png",
   "assets/images/garbage.png",
   "assets/images/woman-1.png",
   "assets/images/kung-fu.png"
  ];

  // current avatar.  Will be used to display the appropriate avatar in profile-edit.html.  Will reference $scope.avatars particular index.
  $scope.currentAvatar = $scope.avatars[0];

  console.log( $scope.avatars[0] );

  // will be used to keep track of left AND right clicks and will be the index of the $scope.avatars
  var avatarClick = 0;

  // function to run if the left arrow is clicked.  Will decrease the avatarClick and set the $scope.currentAvatar to the appropriate index
  $scope.previousIcon = function() {
   console.log( "Previous" );
   avatarClick--;
   $scope.currentAvatar = $scope.avatars[avatarClick];
   console.log( $scope.currentAvatar );

   if( avatarClick < 0 ) {
     avatarClick = 8;
     $scope.currentAvatar = $scope.avatars[8];
     console.log( $scope.currentAvatar );
   }

   console.log( "Click: " + avatarClick );
  }; // end previousIcon()

  // function to run if the right arrow is clicked.  Will increase the avatarClick and set the $scope.currentAvatar to the appropriate index
  $scope.nextIcon = function() {
   console.log( "Next" );

   if( avatarClick >= $scope.avatars.length - 1 ) {
     avatarClick = 0;
     $scope.currentAvatar = $scope.avatars[0];
   }

   else {
     avatarClick++;
     $scope.currentAvatar = $scope.avatars[avatarClick];
     console.log( $scope.currentAvatar );
   }

   console.log( "Click: " + avatarClick );
  }; // end nextIcon()

  /****************************************************************************************
    jQuery functions
  ****************************************************************************************/

  $( ".left-chores" ).click( function() {
    console.log( "Houston, we have liftoff!" );
    $( ".chores-bg-color" ).slideToggle();
  }); // end .left-chores click event

  $( ".fa-sort-asc" ).click( function() {
    $( ".chores-bg-color" ).slideUp();
  }); // end .fa-sort-asc click event


}]); // end ControllerAvatar
