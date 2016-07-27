mainApp.service('User', ['$location', function($location) {
    var storage = localStorage;

    return {
        getToken:   function() { return storage.getItem("user_token"); },
        isLoggedIn: function() { storage.getItem("user_token") ? true : false; },

        logIn: function(mytoken) {
            storage.setItem("user_token", JSON.stringify(mytoken));
            $location.path("/main");
        },

        logOut: function() {
            storage.removeItem("user_token");
            $location.path("/landing");
        }
    };
}]);
//Big thanks to James Dabbs for this example!! http://github.com/jamesdabbs
