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
            url:   "http://f6ed491e.ngrok.io/users/me",
            // data: {
            //     email:$rootScope.email,
            //     password:$rootScope.password,
            // },
            headers: {Authorization: JSON.parse(localStorage.getItem( "user_token")) }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            User.logIn(JSON.parse(localStorage.getItem( "user_token")));
          }, function() {
              alert("Something went wrong!");
          });
      };

        $scope.logout = function() {
        storage.removeItem("user_token");
        $location.path("/landing");      };
  }]);

      //       console.log(response.data.authentication.token_info.unique_token);
      //       console.log(response.data.email);
      // $rootScope.username= response.data.username
      // $rootScope.token = response.data.authentication.token_info.unique_token
      // $rootScope.email= response.data.email


//     $rootScope.logout = function() {
//         User.logOut();
//     };
// }]);
