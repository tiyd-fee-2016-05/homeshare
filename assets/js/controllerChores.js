mainApp.controller( "ControllerChores", [ "$scope", "$http", function( $scope, $http) {

  $scope.totalChores;

  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/1/chores',
    method: 'GET',
    headers: {'Authorization':'maria@example.com'}
  }).success( function(data) {
    $scope.totalChores = data.chores.all_chores;
    console.log( $scope.totalChores );
  }); // end GET GET success

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
    console.log( $scope.totalChores.indexOf( chore ) );
    $scope.chores.splice( $scope.totalChores.indexOf( chore ), 1 );
    $scope.totalChores.splice( $scope.totalChores.indexOf( chore ), 1 );
  }; // end removeChore()

}]); // end ControllerChores
