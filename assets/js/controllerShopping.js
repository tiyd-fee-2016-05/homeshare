mainApp.controller( "ControllerShopping", [ "$scope", "$http", function( $scope, $http ) {

  $scope.totalShoppingList;

  $http({
    url: "https://46522539.ngrok.io/homes/1/list/items",
    method: "GET",
    headers: { "Authorization": "maria@example.com" }
  })// end $http GET request
  .success( function( data ) {
    $scope.totalShoppingList = data.items.unpurchased_items;
    console.log( $scope.totalShoppingList );
  }); // end .success

  $scope.removeItem = function( item ) {
    // item.stopPropagation();
    var clickedItem = $scope.totalShoppingList.indexOf( item );
    var clickedItemId = $scope.totalShoppingList[clickedItem].id;
    console.log( clickedItem );
    console.log( clickedItemId );

    // $scope.totalShoppingList.splice( clickedItem, 1 );

    $http({
      // url: 'https://46522539.ngrok.io/homes/1/list/items/' + clickedItemId + '/purchase',
      url: 'https://46522539.ngrok.io/homes/1/list/items/2/purchase', // this one works!!!!!!!!
      // url: 'https://tiy-homeshare.herokuapp.com/homes/1/list/items/' + clickedItemId + '/purchase', // this works too...they all should work b/c the problem was on the back end!!!
      method: "POST",
      headers: { "Authorization": "maria@example.com" }
    }) // end $http POST request
    .success( function( data ) {
      $scope.data = data.data;
      console.log( data );
    })
  } // end removeItem click event

}]); // end ControllerShopping
