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
"assets/images/avatars/avatar-1.png",
"assets/images/avatars/avatar-2.png",
"assets/images/avatars/avatar.png",
"assets/images/avatars/boy-1.png",
"assets/images/avatars/boy-2.png",
"assets/images/avatars/boy-3.png",
"assets/images/avatars/boy-4.png",
"assets/images/avatars/boy-5.png",
"assets/images/avatars/boy.png",
"assets/images/avatars/catwoman.png",
"assets/images/avatars/construction.png",
"assets/images/avatars/cyclops.png",
"assets/images/avatars/dragon.png",
"assets/images/avatars/elf-1.png",
"assets/images/avatars/elf.png",
"assets/images/avatars/fairy.png",
"assets/images/avatars/goblin.png",
"assets/images/avatars/heisenberg.png",
"assets/images/avatars/hindu-1.png",
"assets/images/avatars/hindu.png",
"assets/images/avatars/hood.png",
"assets/images/avatars/japanese.png",
"assets/images/avatars/king.png",
"assets/images/avatars/knight.png",
"assets/images/avatars/knight2.png",
"assets/images/avatars/kung-fu.png",
"assets/images/avatars/little-red-riding-hood.png",
"assets/images/avatars/man-1.png",
"assets/images/avatars/man-2.png",
"assets/images/avatars/man-3.png",
"assets/images/avatars/man-4.png",
"assets/images/avatars/man-5.png",
"assets/images/avatars/man.png",
"assets/images/avatars/napoleon.png",
"assets/images/avatars/prince.png",
"assets/images/avatars/princess.png",
"assets/images/avatars/punk-1.png",
"assets/images/avatars/punk.png",
"assets/images/avatars/queen.png",
"assets/images/avatars/robocop.png",
"assets/images/avatars/samurai.png",
"assets/images/avatars/santa-claus.png",
"assets/images/avatars/unicorn.png",
"assets/images/avatars/vampire.png",
"assets/images/avatars/viking.png",
"assets/images/avatars/wizard.png",
"assets/images/avatars/woman-1.png",
"assets/images/avatars/woman-2.png",
"assets/images/avatars/woman-3.png",
"assets/images/avatars/woman-4.png",
"assets/images/avatars/woman-5.png",
"assets/images/avatars/woman-6.png",
"assets/images/avatars/woman-7.png",
"assets/images/avatars/woman-8.png",
"assets/images/avatars/woman-9.png",
"assets/images/avatars/woman-10.png",
"assets/images/avatars/woman-11.png",
"assets/images/avatars/woman-12.png",
"assets/images/avatars/woman-13.png",
"assets/images/avatars/woman-14.png",
"assets/images/avatars/woman-15.png",
"assets/images/avatars/woman-16.png",
"assets/images/avatars/woman-17.png",
"assets/images/avatars/woman-18.png",
"assets/images/avatars/woman-19.png",
"assets/images/avatars/woman.png",
"assets/images/avatars/wood-cutter.png"







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

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    $( "html, body" ).animate( { scrollTop: $(document).height() }, 'slow' );
    return false;
  }); // end .left-chores click event

  $( ".fa-sort-asc" ).click( function() {
    $( ".chores-bg-color" ).slideUp();
  }); // end .fa-sort-asc click event


}]); // end ControllerAvatar
