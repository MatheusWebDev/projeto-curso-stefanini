angular.module('PokemonModule')
    .directive('pokemonModal', PokemonModal);

function PokemonModal() {
    return {
        transclude: true,
        template:
        `<div class="modal fade" id="{{idModal}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">{{titleModal}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ng-transclude></ng-transclude>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" data-dismiss="modal" ng-click="confirmar()">{{nomeBotaoConfirmar || "Confirmar"}}</button>
                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal" ng-click="cancelar()">{{nomeBotaoCancelar || "Cancelar"}}</button>
                    </div>
                </div>
            </div>
        </div>`,
        scope: {
            idModal:"@",
            titleModal: "@",
            callbackConfirmar: "&",
            callbackCancelar: "&",
            nomeBotaoConfirmar: "@",
            nomeBotaoCancelar: "@"
        },
        link: function($scope) {
            $scope.idModal = $scope.idModal || ('menu-' + new Date().getTime());

            $scope.confirmar = function() {
                $scope.callbackConfirmar();
            };

            $scope.cancelar = function() {
                $scope.callbackCancelar();
            };

        }
    };
}

