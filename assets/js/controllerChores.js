mainApp.controller( "ControllerChores", [ "$scope", "$http",  function( $scope, $http ) {

  // $scope.totalChores = [{"name":"sweep"}, {"name":"scrub"}, {"name":"plants"}, {"name":"vaccim"}];
  $scope.totalChores;
  $scope.choreIcons = [];
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
        "ChoreIcon": "assets/images/chores/garbage.png",
        "ChoreName": "Empty recycling"
      },
      {
        "id": 8,
        "ChoreIcon": "assets/images/chores/sponge.png",
        "ChoreName": "Sponge walls"
      },
      {
        "id": 9,
        "ChoreIcon": "assets/images/chores/vacuum-cleaner.png",
        "ChoreName": "Vacuum ceiling"
      },
      {
        "id": 10,
        "ChoreIcon": "assets/images/chores/washing-machine-1.png",
        "ChoreName": "Do laundry"
      },
      {
        "id": 11,
        "ChoreIcon": "assets/images/avatars/goblin.png",
        "ChoreName": "Default this chore is weird and unecessary"
      }
    ]; // end $scope.chores

  // $http({
  //   url: 'https://tiy-homeshare.herokuapp.com/homes/15/chores',
  //   method: 'GET',
  //   headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  // }).success( function(data) {
  //   $scope.totalChores = data.chores.incomplete;
  //   console.log($scope.totalChores);
  // }); // end GET GET success

  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/16/chores',
    method: 'GET',
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  }).success( function(data) {
    $scope.totalChores = data.chores.incomplete;
    // $scope.totalChoresName = data.chores.incomplete.name;
    console.log($scope.totalChores);
    console.log( $scope.totalChores[0] );

    for( var i = 0; i < $scope.totalChores.length; i++ ) {

      // if( $scope.totalChores[i].name.match( /sci/gi) ) {
      //   $scope.choreIcons.push( $scope.chores[9] );
      //   console.log( true );
      //   console.log( "List of sweep icons: " + $scope.choreIcons[i].ChoreName );
      // }

      if( $scope.totalChores[i].name.match( /bath/gi ) || $scope.totalChores[i].name.match( /toilet/gi ) || $scope.totalChores[i].name.match( /shower/gi ) ) {
        $scope.choreIcons.push( $scope.chores[0].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /sweep/gi ) ) {
        $scope.choreIcons.push( $scope.chores[1].ChoreIcon);
      }

      else if( $scope.totalChores[i].name.match( /dish/gi ) ) {
        $scope.choreIcons.push( $scope.chores[2].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /water/gi ) || $scope.totalChores[i].name.match( /flowers/gi ) || $scope.totalChores[i].name.match( /garden/gi) ) {
        $scope.choreIcons.push( $scope.chores[3].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /dishes/gi ) ) {
        $scope.choreIcons.push( $scope.chores[4].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /plants/gi ) ) {
        $scope.choreIcons.push( $scope.chores[5].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /recycling/gi ) ) {
        $scope.choreIcons.push( $scope.chores[6].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /garbage/gi ) ) {
        $scope.choreIcons.push( $scope.chores[7].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /sponge/gi ) || $scope.totalChores[i].name.match( /scrub/gi ) || $scope.totalChores[i].name.match( /walls/gi ) ){
        $scope.choreIcons.push( $scope.chores[8].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /vacc/gi ) || $scope.totalChores[i].name.match( /vacu/gi ) || $scope.totalChores[i].name.match( /ceiling/gi ) ) {
        $scope.choreIcons.push( $scope.chores[9].ChoreIcon );
      }

      else if( $scope.totalChores[i].name.match( /laundry/gi ) || $scope.totalChores[i].name.match( /clothes/gi ) ) {
        $scope.choreIcons.push( $scope.chores[10].ChoreIcon );
      }

      else {
        console.log( false );
        $scope.choreIcons.push( $scope.chores[11].ChoreIcon );
      }
    } // end for loop
  }); // end GET GET success

    $scope.removeChore = function( chores ) {
      var clickedChore = $scope.totalChores.indexOf( chores );
      var clickedChoreId = $scope.totalChores[clickedChore].id;
      console.log( $scope.totalChores.indexOf( chores) );
      console.log( $scope.totalChores[clickedChore].id );
      $scope.chores.splice( $scope.totalChores.indexOf( chores ), 1 );
      $scope.totalChores.splice( $scope.totalChores.indexOf( chores ), 1 );

      $http({
        url: 'http://tiy-homeshare.herokuapp.com/homes/' + 16 + '/chores/' + clickedChoreId + '/mark_complete', // Erik's
        // url: 'https://tiy-homeshare.herokuapp.com/homes/15/chores/' + clickedChoreId + '/mark_complete', // Travis'
        method: 'POST',
        headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
        // data: $scope.form
      }).success(function(data){
        $scope.data = data.data;
        console.log($scope.form);
      });
    }; // end removeChore()
}]); // end ControllerChores
