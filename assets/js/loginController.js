mainApp.controller('LoginCtrl', ['$scope', '$rootScope','$http', '$location', 'User', function($scope, $rootScope, $http, $location, User) {
    // if (User.isLoggedIn()) {
    //     $location.path("/");
    // }
    // var rootUrl= "http://6e62d5d1.ngrok.io/";

    var rootUrl= "http://f6ed491e.ngrok.io/users/me/";

    $( ".landing-header" ).css( "visibility", "hidden" );

    $scope.loginUser = function() {
      console.log("Submitted");
        $http({
            method: "POST",
            url:   "http://f6ed491e.ngrok.io/users/sign_in",
            data: {
                email:$rootScope.email,
                password:"password",
            },
            headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
        }).then(function(response) {
            // TODO: store and respect expiration time??
      //       User.logIn(response.data.authentication.token_info.unique_token);
      //       console.log(response.data.authentication.token_info.unique_token);
      //       console.log(response.data.email);
      // $rootScope.username= response.data.username
      // $rootScope.token = response.data.authentication.token_info.unique_token
      // $rootScope.email= response.data.email
        }, function() {
            alert("Something went wrong!");
        });
    };

    $rootScope.logout = function() {
        User.logOut();
    };
}]);
