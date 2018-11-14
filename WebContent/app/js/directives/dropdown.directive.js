angular.module("pokemonApp")
   .directive("dropdownMenu", dropdownMenu);

function dropdownMenu() {
   return {
      transclude: true,
      template:
         `
         <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="{{id}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {{tituloDropdown}}
            </button>
            <div class="dropdown-menu" aria-labelledby="{{id}}" ng-transclude>
            </div>
         </div>
         `,
      scope: {
         id: "@",
         tituloDropdown: "@"
      },
      link: function ($scope) {
         $scope.id = $scope.id || ('menu-' + new Date().getTime());
      }
   };
}