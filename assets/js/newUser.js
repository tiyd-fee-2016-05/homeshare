mainApp.controller('RegisterController', ['$scope', '$rootScope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
    if (User.isLoggedIn()) {
        $location.path("/");
    }

    $scope.user = { email: "", password: "", passwordConfirmation: "" };

    $scope.register = function() {
        $http({
            method: "POST",
            url:    "http://f6ed491e.ngrok.io/api/register",
            data: {
                email:    $scope.user.email,
                password: $scope.user.password
            }
        }).then(function(response) {
            // todo: store and respect expiration time??
            User.logIn(response.data.authentication.token_info.unique_token);
            console.log(JSON.stringify(response.data.authentication.token_info.unique_token));
            // storage.setItem("user_token",tokn);
        }, function() {
            alert("Something went wrong!"); // fixme: be better
        });
    };

    $scope.logout = function() {
        User.logOut();
    };
}]);

//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
