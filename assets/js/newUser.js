mainApp.controller('RegisterController', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {

    $scope.register = function() {
      console.log( JSON.stringify($scope.user.email) + ", " + JSON.stringify($scope.user.password) );
      console.log( "Email: " + JSON.stringify($scope.user.email) );
        $http({
            method: "POST",
            // url:    "http://tiy-homeshare.herokuapp.com/api/register", // this is Erik's
            url:    "http://tiy-homeshare.herokuapp.com/api/register", // this is Travis'
            data:
            {
                email:    $scope.user.email,
                "password": JSON.stringify($scope.user.password)
            }
        }).then(function(response) {
          console.log( response );
            console.log(JSON.stringify(response.data.authentication.token_info.unique_token));
            localStorage.setItem("user_token", JSON.stringify(response.data.authentication.token_info.unique_token));
            localStorage.setItem("user_id", JSON.stringify(response.data.authentication.token_info.user_id) );
        }, function() {
            alert("Something went wrong!"); // fixme: be better
        });
    }; // end register click event
}]); // end RegisterController

//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
