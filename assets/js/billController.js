mainApp.controller( "billingController", [ "$scope", "$http", "$location", function( $scope, $http, $location ) {

  // global variables
  $scope.allBills;
  $scope.clickedBill;
  // $scope.paidBills = [ true, false, true ]; // for testing only

  // for bill-info.html...when page loads, get the bill to be paid from local storage and store it in $scope.clickedBill
  angular.element( document ).ready( function() {
    $scope.clickedBill = JSON.parse(localStorage.getItem( "clicked_bill" ) );
  });

  // for bill-admin.html...puts focus in first input box when page loads
  angular.element( document ).ready( function() {
    jQuery( ".ba-name-input" ).focus();
  });

  // for bill-user.html...gets all bills that have been paid...NOT NEEDED OR USED NOW b/c the return of /bills contains paid status
  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse( localStorage.getItem( "home_id") ) + '/bills/paid', // Travis'
    method: 'GET',
    headers: { "Authorization": JSON.parse( localStorage.getItem( "user_token" ) ) }
    }) // end request
    .success( function( data ) {
      console.log( data );
    }); // end success

  /*
    for bill-user.html...function to switch between dollar sign for unpaid and check mark for paid
    since paid status of bill is already returned, just return the boolean for each bill
  */
  $scope.paid = function( bill ) {
    // return $scope.paidBills[$scope.allBills.indexOf( bill )];
    return bill.paid;
  }

  // for bill-admin.html...click event will POST data entered by user in fields, clear out fields, and set focus to first field
  $scope.submitForm = function() {

    $scope.form = {
      'name': $scope.billName,
      'amount': $scope.billAmount
    };

    // checking what we are passing in the form before we send it
    console.log( $scope.form );

    $http({
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse( localStorage.getItem( "home_id" ) ) + '/bills?name=' + $scope.billName + '&amount=' + $scope.billAmount, // Travis'
      method: 'POST',
      headers: { "Authorization": JSON.parse( localStorage.getItem( "user_token" ) ) },
      data: $scope.form
    }) // end request
    .success( function( data ){
      $scope.data = data.data;
      console.log($scope.form);
    });

    jQuery( ".ba-name-input" ).val( "" );
    jQuery( ".ba-area-input" ).val( "" );
    jQuery( ".ba-points-input" ).val( "" );
    jQuery( ".ba-name-input" ).focus();

  }; // end submitForm click event


  // for bill-user.html...will GET all the bills that have been entered
  $http({
    url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse( localStorage.getItem( "home_id" ) ) + '/bills', // Travis'
    method: 'GET',
    headers: { "Authorization": JSON.parse( localStorage.getItem( "user_token" ) ) }
  }) // end request
  .success( function( data ) {
    $scope.allBills = data.bills.all_bills;
    console.log( $scope.allBills );
  }); // end success

  // for bill-user.html...will target bill chosen to be paid and store its entire object in local storage
  $scope.sendPayment = function( bills ) {
    localStorage.setItem( "clicked_bill", JSON.stringify( bills ) );
    console.log( bills );
  } // end sendPayment click event

  // for bill-info.html...will POST payment of bill in localStorage to database and then take user back to bill-user.html
  $scope.payBill = function() {
    $http({
      url: 'http://tiy-homeshare.herokuapp.com/homes/' + JSON.parse( localStorage.getItem( "home_id" ) ) + '/bills/' + JSON.parse( localStorage.getItem( "clicked_bill" ) ).id + '/pay' , // Travis'
      method: 'POST',
      headers: { "Authorization": JSON.parse(localStorage.getItem( "user_token" ) ) }
    }) // end request
    .then( function( data ) {
      console.log( data );
      $location.path("/bill-user");
    }); // end success

  }; // end $scope.payBill click event
}]); // end billingController
