angular.module("pokemonApp").controller("abstractController", abstractController);

abstractController.$inject = ["$scope","$rootScope", "$location"];

function abstractController($scope, $rootScope, $location){
   $scope.go = function ( path ) {
      $location.path( path );
   };
}