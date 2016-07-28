
mainApp.controller('RegisterController', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {

    $scope.register = function() {
      console.log( JSON.stringify($scope.user.email) + ", " + JSON.stringify($scope.user.password) );
        $http({
            method: "POST",
            url:    "http://f6ed491e.ngrok.io/users",
            data:
            {
              user: {
                "email":    JSON.stringify($scope.user.email),
                "password": JSON.stringify($scope.user.password),
                "password_confirmation": JSON.stringify($scope.user.passwordConfirmation)
              }
            }
        }).then(function(response) {
          console.log( response );
            // console.log(JSON.stringify(response.data.authentication.token_info.unique_token));
            // localStorage.setItem("user_token", JSON.stringify(response.data.authentication.token_info.unique_token));
            // localStorage.setItem("user_id", JSON.stringify(response.data.authentication.token_info.uni) )
        }, function() {
            alert("Something went wrong!"); // fixme: be better
        });
    }; // end register click event
}]); // end RegisterController

//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
