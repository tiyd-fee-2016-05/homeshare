mainApp.controller("shopAdminController", ['$scope', '$http', function($scope, $http){


// var text = "$scope.user_token";
  $scope.submitForm = function() {
    // console.log($scope.choreName);
    $scope.form = {
      'qty': $scope.itemQty,
      'item': $scope.itemName,
      'item_xp' :$scope.itemXp
    };
    console.log($scope.form);
    $http({
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/list/items?title=' + $scope.itemName + '&item_xp=' + $scope.item_xp ,
      method: 'POST',
      headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) },
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);
    });

    jQuery( ".chore-name-input" ).val("");
    jQuery( ".chore-area-input" ).val("");
    jQuery( ".chore-points-input" ).val("");

  }; // end submitForm click event
$http({
  url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/list/items',
  method: 'GET',
  headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});
}]);
