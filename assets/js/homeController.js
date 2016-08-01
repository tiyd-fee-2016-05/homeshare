mainApp.controller('HomeController', ['$scope', '$http', '$location', 'User',  '$rootScope', function($rootScope, $scope, $http, $location, User) {

  // $scope.user_token = User.getToken();

    if (!$scope.user_token) {
        $location.path("/signup");
    }

    $http({
        method:  "GET",
        // url:     "http://tiy-homeshare.herokuapp.com/users/me", // Erik's?
        url:     "http://tiy-homeshare.herokuapp.com/users/me", // Travis'?
        headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
    }).then(function(response) {
        $scope.user = response.data;
        console.log($scope.user);
    }, function() {
        alert("Something went wrong!");
    });
}]);

//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
