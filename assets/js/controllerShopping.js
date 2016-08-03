mainApp.controller( "ControllerShopping", [ "$scope", "$http", function( $scope, $http ) {

  $scope.totalShoppingList;

  $scope.submitForm = function() {
    // console.log($scope.choreName);
    $scope.form = {
      'title': $scope.itemQty.toString(),
      'description': $scope.itemDesc,
      'item_xp' : $scope.itemXp
    };
    console.log($scope.form);
    $http({
      // url: 'http://tiy-homeshare.herokuapp.com/homes/32/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&chore_xp=' + $scope.chore_xp , // Erik's
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/list/items?title=' + $scope.itemQty.toString() + '&description=' + $scope.itemDesc + '&item_xp='+ $scope.itemXp , // Travis'
      method: 'POST',
      headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) },
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);
    });

    jQuery( ".sa-name-input" ).val("");
    jQuery( ".sa-area-input" ).val("");

  }; // end submitForm click event





  $http({
    // url: "http://tiy-homeshare.herokuapp.com/homes/32/list/items", // this is Erik's
    url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/list/items', // this is Travis'
    method: "GET",
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  })// end $http GET request
  .success( function( data ) {
    $scope.totalShoppingList = data.items.unpurchased_items;
    console.log( $scope.totalShoppingList );
  }); // end .success

  $scope.removeItem = function( items ) {
    // item.stopPropagation();
    var clickedItem = $scope.totalShoppingList.indexOf( items );
    var clickedItemId = $scope.totalShoppingList[clickedItem].id;
    console.log( clickedItem );
    console.log( clickedItemId );

    $scope.totalShoppingList.splice( clickedItem, 1 );

    $http({
      // url: 'https://46522539.ngrok.io/homes/1/list/items/' + clickedItemId + '/purchase',
      // url: 'http://tiy-homeshare.herokuapp.com/homes/32/list/items/' + clickedItemId + '/purchase', // this one works!!!!!!!!...Erik's
      // url: 'http://tiy-homeshare.herokuapp.com/users/me/homes/1/list/items/' + clickedItemId + '/purchase', // this works too...they all should work b/c the problem was on the back end!!!

      // url: 'https://46522539.ngrok.io/homes/15/list/items/' + clickedItemId + '/purchase',
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/list/items/' + clickedItemId + '/purchase', // this one works!!!!!!!!...Travis'
      // url: 'http://tiy-homeshare.herokuapp.com/users/me/homes/15/list/items/' + clickedItemId + '/purchase', // this works too...they all should work b/c the problem was on the back end!!!
      method: "POST",
      headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
    }) // end $http POST request
    .success( function( data ) {
      $scope.data = data.data;
      console.log( data );
    });
  }; // end removeItem click event

}]); // end ControllerShopping
