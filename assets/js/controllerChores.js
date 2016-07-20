mainApp.controller( "ControllerChores", [ "$scope", function( $scope ) {

  // list of all chores available
  // $scope.chores = [
  //  "assets/images/chores/bath.png",
  //  "assets/images/chores/broom-1.png",
  //  "assets/images/chores/dishwasher.png",
  //  "assets/images/chores/flower.png",
  //  "assets/images/chores/liquid-soap.png",
  //  "assets/images/chores/plant.png",
  //  "assets/images/chores/recycle-bin.png",
  //  "assets/images/chores/sponge.png",
  //  "assets/images/chores/vacuum-cleaner.png",
  //  "assets/images/chores/washing-machine-1.png"
  // ];

  $scope.chores = [
    {
      "id": 0,
      "ChoreIcon": "assets/images/chores/bath.png",
      "ChoreName": "Clean bath"
    },
    {
      "id": 1,
      "ChoreIcon": "assets/images/chores/broom-1.png",
      "ChoreName": "Sweep floor"
    },
    {
      "id": 2,
      "ChoreIcon": "assets/images/chores/dishwasher.png",
      "ChoreName": "Load dishwasher"
    },
    {
      "id": 3,
      "ChoreIcon": "assets/images/chores/flower.png",
      "ChoreName": "Water flowers"
    },
    {
      "id": 4,
      "ChoreIcon": "assets/images/chores/liquid-soap.png",
      "ChoreName": "Wash dishes"
    },
    {
      "id": 5,
      "ChoreIcon": "assets/images/chores/plant.png",
      "ChoreName": "Water plants"
    },
    {
      "id": 6,
      "ChoreIcon": "assets/images/chores/recycle-bin.png",
      "ChoreName": "Empty recycling"
    },
    {
      "id": 7,
      "ChoreIcon": "assets/images/chores/sponge.png",
      "ChoreName": "Sponge walls"
    },
    {
      "id": 8,
      "ChoreIcon": "assets/images/chores/vacuum-cleaner.png",
      "ChoreName": "Vacuum ceiling"
    },
    {
      "id": 9,
      "ChoreIcon": "assets/images/chores/washing-machine-1.png",
      "ChoreName": "Do laundry"
    },
  ];

  $scope.removeChore = function( chore ) {
    console.log( $scope.chores.indexOf( chore ) );
    $scope.chores.splice( $scope.chores.indexOf( chore ), 1 );
  }; // end removeChore()

}]); // end ControllerChores




// $scope.chores2 = [
//   {
//     "id": 0,
//     "ChoreIcon": "assets/images/chores/bath.png",
//     "ChoreName": "Clean bath"
//   },
//   {
//     "id": 1,
//     "ChoreIcon": "assets/images/chores/broom-1.png",
//     "ChoreName": "Sweep floor"
//   },
//   {
//     "id": 2,
//     "ChoreIcon": "assets/images/chores/dishwasher.png",
//     "ChoreName": "Load dishwasher"
//   },
//   {
//     "id": 3,
//     "ChoreIcon": "assets/images/chores/flower.png",
//     "ChoreName": "Water flowers"
//   },
//   {
//     "id": 4,
//     "ChoreIcon": "assets/images/chores/liquid-soap.png",
//     "ChoreName": "Wash dishes"
//   },
//   {
//     "id": 5,
//     "ChoreIcon": "assets/images/chores/plant.png",
//     "ChoreName": "Water plants"
//   },
//   {
//     "id": 6,
//     "ChoreIcon": "assets/images/chores/recycle-bin.png",
//     "ChoreName": "Empty recycling"
//   },
//   {
//     "id": 7,
//     "ChoreIcon": "assets/images/chores/sponge.png",
//     "ChoreName": "Sponge walls"
//   },
//   {
//     "id": 8,
//     "ChoreIcon": "assets/images/chores/vacuum-cleaner.png",
//     "ChoreName": "Vacuum ceiling"
//   },
//   {
//     "id": 9,
//     "ChoreIcon": "assets/images/chores/washing-machine-1.png",
//     "ChoreName": "Do laundry"
//   },
// ];
