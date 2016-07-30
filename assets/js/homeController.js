mainApp.controller('HomeController', ['$scope', '$http', '$location', 'User',  '$rootScope', function($rootScope, $scope, $http, $location, User) {

  // $scope.user_token = User.getToken();

    if (!$scope.user_token) {
        $location.path("/signup");
    }



    $http({
        method:  "GET",
        url:     "https://tiy-homeshare.herokuapp.com/users/me",
        headers: {"Authorization": JSON.parse(localStorage.getItem( "user_token" )) }
    }).then(function(response) {
        $scope.user = response.data;
    }, function() {
        alert("Something went wrong!");
    });
}]);

//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
