(function() {
    'use strict';

    angular.module('app').service('taskServiceGet', function($http){
        this.pegarLista = function(aluno){
            return $http.get('http://localhost:8083/listaChamada/');
            }

        });
})();