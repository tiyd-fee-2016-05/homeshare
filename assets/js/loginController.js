mainApp.controller('LoginCtrl', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    // if (User.isLoggedIn()) {
    //     $location.path("/");
    // }
    // var rootUrl= "http://6e62d5d1.ngrok.io/";
    // var rootUrl= "http://tiy-homeshare.herokuapp.com/users/me/"; // Erik's
    // var rootUrl= "http://tiy-homeshare.herokuapp.com/users/me/"; // Travis'

    angular.element(document).ready( function() {
      jQuery( ".landing_user" ).focus();
    });


    $scope.loginUser = function() {
      console.log("Submitted");
        $http({
            method: "POST",
            url:   "http://tiy-homeshare.herokuapp.com/api/login?email=" + $scope.email + "&password=" + $scope.password, // Erik's?
            data: {
                "email": $scope.email,
                "password": $scope.password,
            },
        }).then(function(response) {
          console.log('successful');
             $location.path("/main");
            // User.logIn(JSON.parse(localStorage.getItem( "user_token")));
          }, function() {
              alert("Something went wrong!");
          });
      };

        $scope.logout = function() {
        storage.removeItem("user_token");
        $location.path("/landing");      };
  }]);

      // console.log(response.data.authentication.token_info.unique_token);
      // console.log(response.data.email);
      // $rootScope.username= response.data.username
      // $rootScope.token = response.data.authentication.token_info.unique_token
      // $rootScope.email= response.data.email
      // $rootScope.logout = function() {
      // User.logOut();
//     };
// }]);
