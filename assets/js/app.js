var mainApp = angular.module( "mainApp", ["ngRoute", "ngAnimate"] );

mainApp.config( function($routeProvider) {

  $routeProvider

    .when( "/group", {
      templateUrl: "pages/group.html"
    })

  .when( "/landing", {
    templateUrl: "pages/landing.html"
  })
  .when( "/login", {
    templateUrl: "pages/login.html"
  })
  .when( "/signup", {
    templateUrl: "pages/signup.html",
    controller: "signupController"
  })
  .when( "/profile-edit", {
    templateUrl: "pages/profile-edit.html"
  })
  .when( "/household", {
    templateUrl: "pages/household.html",
    controller: "hhController"
  })
  .when( "/main", {
    templateUrl: "pages/main.html"
  })
  .when( "/user", {
    templateUrl: "pages/user.html"
  })
  .when( "/shop-admin", {
    templateUrl: "pages/shop-admin.html"
  })
  .when( "/shop-user", {
    templateUrl: "pages/shop-user.html"
  })
  .when( "/chore-admin", {
    templateUrl: "pages/chore-admin.html"
  })
  .when( "/chore-user", {
    templateUrl: "pages/chore-user.html",
    controller: "ControllerChores",
  })
  .when( "/bill-admin", {
    templateUrl: "pages/bill-admin.html"
  })
  .when( "/bill-user", {
    templateUrl: "pages/bill-user.html"
  })
  .when( "/calendar", {
    templateUrl: "pages/calendar.html"
  })
  .otherwise({
    redirectTo: "/main"
  });
}); // end mainApp.config
