mainApp.controller('LoginCtrl', ['$scope', '$rootScope','$http', '$location', 'User', function($scope, $rootScope, $http, $location, User) {
    // if (User.isLoggedIn()) {
    //     $location.path("/");
    // }
    // var rootUrl= "http://6e62d5d1.ngrok.io/";
    var rootUrl= "http://f6ed491e.ngrok.io/users/me/";


    $scope.loginUser = function() {
      console.log("Submitted");
        $http({
            method: "POST",
            url:   rootUrl + "landing",
            data: {
                email:"travis1@homeshare.com",
                password:"password",
            }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            User.logIn(response.data.authentication.token_info.unique_token);
            console.log(response.data.authentication.token_info.unique_token);

      $rootScope.username= response.data.username
      $rootScope.token = response.data.token

        }, function() {
            alert("Something went wrong!");
        })
    }

    $rootScope.logout = function() {
        User.logOut()
    }
}])
