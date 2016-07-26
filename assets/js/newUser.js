mainApp.controller('RegisterController', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    if (User.isLoggedIn()) {
        $location.path("/");
    }

    $scope.user = { email: "", password: "", passwordConfirmation: "" };

    $scope.register = function() {
        $http({
            method: "POST",
            url:    "https://46522539.ngrok.io/api/register",
            data: {
                email:    $scope.user.email,
                password: $scope.user.password
            }
        }).then(function(response) {
            // todo: store and respect expiration time??
            User.logIn(response.data.token);
            console.log(token);
        }, function() {
            alert("Something went wrong!"); // fixme: be better
        });
    };

    $scope.logout = function() {
        User.logOut();
    };
}]);
