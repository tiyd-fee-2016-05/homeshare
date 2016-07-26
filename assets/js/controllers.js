
//CHORE ADMIN CONTROLLER

mainApp.controller("choreAdminController", ['$scope', '$http', function($scope, $http){


  $scope.submitForm = function() {
          // console.log($scope.choreName);
          $scope.form = {
            'name': $scope.choreName,
            'description': $scope.choreDesc,
            'chore_xp': $scope.chore_xp
          };
          console.log($scope.form);
    $http({
      url: 'https://46522539.ngrok.io/homes/1/chores?name=' + $scope.choreName + '&description=' + $scope.choreDesc + '&value=' + $scope.chore_xp ,
      method: 'POST',
      headers: {'Authorization':'maria@example.com'},
      data: $scope.form
    }).success(function(data){
      $scope.data = data.data;
      console.log($scope.form);

    });
};
$http({
  url: 'https://46522539.ngrok.io/homes/1/chores',
  method: 'GET',
  headers: {'Authorization': 'maria@example.com'}
}).success(function(data){
  $scope.totalChores = data;
  console.log($scope.totalChores);

});
    }]);

    //HOUSEHOLD SETUP CONTROLLER

    mainApp.controller("hhController", ['$scope', '$http', function($scope, $http){
      $scope.submitForm = function() {
              // console.log($scope.choreName);
              $scope.form = {
                "name": $scope.hhName,
                "city": $scope.hhDesc,
                "value": $scope.hhRent
              };
              console.log($scope.form);


        $http({
          url: 'https://46522539.ngrok.io/homes?name=' + $scope.hhName + '&description=' + $scope.hhDesc + '&rent=' + $scope.hhRent ,
          method: 'POST',
          data: $scope.form,
          headers: {'Authorization': 'maria@example.com'}
        }).success(function(data){
          $scope.data = data.data;
          console.log($scope.data);

        });
      };

      $http({
        url: 'https://46522539.ngrok.io/homes/',
        method: 'GET',
        headers: {'Authorization': 'maria@example.com'}
      }).success(function(data){
        $scope.home_id = data.data;
        console.log($scope.home_id);

      });

  }]);



//OPTIONS POP OUT
mainApp.controller( "optionsController", [ "$scope", function( $scope ) {
//Close pannel
$(window).ready(function () {

   $(".options").hide()
 });
//Accordion menu
  $( ".fa-cog" ).click( function() {
    console.log( "Hello" );
    $( ".options" ).slideToggle();

    // thank you http://www.electrictoolbox.com/jquery-scroll-bottom/ for your help
    // $( "html, body" ).animate( { scrollTop: $(document).width() }, 'slow' );
    // return false;
  }); // end ".user-avatar" click event
}]);

//DROPDOWN MENU THAT POPULATES CHORES list
//Thanks very much, https://aspdotnetcodehelp.wordpress.com/2015/08/08/how-to-populate-dropdownlist-from-database-using-angularjs-ng-options-attribute/
mainApp.controller('drpdwnCtrl',['$scope','$http' , function ($scope, $http) {
            $scope.ChoreList = null;
            //Declaring the function to load data from database
            $scope.fillChoreList = function () {
                $http({
                    method: 'POST',
                    url: 'https://46522539.ngrok.io/homes/1/chores',
                    data: $scope.ChoreList,
                    headers: {'Authorization':'maria@example.com'}
                }).success(function (result) {
                    $scope.ChoreList = result.chores.incomplete;
                    console.log($scope.ChoreList);
                });
            };
            //Calling the function to load the data on pageload
            $scope.fillChoreList();
        }]);
