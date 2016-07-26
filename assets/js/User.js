mainApp.service('User', ['$location', function($location) {
    var storage = localStorage;

    return {
        getToken:   function() { return storage.getItem("user-token"); },
        isLoggedIn: function() { storage.getItem("user-token") ? true : false; },

        logIn: function(mytoken) {
            storage.setItem("user-token", mytoken);
            $location.path("/household");
        },

        logOut: function() {
            storage.removeItem("user-token");
            $location.path("/landing");
        }
    };
}]);
