mainApp.controller( "billingController", [ "$scope", "$http",  function( $scope, $http ) {

  $scope.allBills;
  $scope.clickedBill;
  $scope.paidBills = [ true, false, true ];

  angular.element( document ).ready( function() {
    $scope.clickedBill = JSON.parse(localStorage.getItem( "clicked_bill" ) );
  });

  // puts focus in first input box when page loads
  angular.element(document).ready( function() {
    jQuery( ".ba-name-input" ).focus();
  });

  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/bills/paid', // Travis'
    method: 'GET',
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
    }) // end request
    .success( function( data ){
      console.log( data );
    }); // end success

  // function to switch between dollar sign for unpaid and check mark for paid
  $scope.paid = function( bill ) {
    return $scope.paidBills[$scope.allBills.indexOf( bill )];
  }

  $scope.submitForm = function() {
    // console.log($scope.choreName);
    $scope.form = {
      'name': $scope.billName,
      'amount': $scope.billAmount
    };

    console.log($scope.form);

    $http({
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/bills?name=' + $scope.billName + '&amount=' + $scope.billAmount, // Travis'
      method: 'POST',
      headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) },
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);
    });

    jQuery( ".ba-name-input" ).val("");
    jQuery( ".ba-area-input" ).val("");
    jQuery( ".ba-points-input" ).val("");
    jQuery( ".ba-name-input" ).focus();

  }; // end submitForm click event



  // payment parameters:

$http({
  url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/bills', // Travis'
  method: 'GET',
  headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
  }) // end request
  .success(function(data){
    $scope.allBills = data.bills.all_bills;
    console.log($scope.allBills);
  }); // end success


  $scope.sendPayment = function( bills ) {
    localStorage.setItem("clicked_bill", JSON.stringify( bills ));
    console.log( bills );
  } // end sendPayment click event


$scope.payBill = ( function(){
  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse(localStorage.getItem( "home_id")) + '/bills/' + JSON.parse(localStorage.getItem( "clicked_bill")).id + '/pay' , // Travis'
    method: 'POST',
    headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
    }) // end request
    .success(function(data){
      console.log(data);
    }); // end success
});
}]); // end billingController
