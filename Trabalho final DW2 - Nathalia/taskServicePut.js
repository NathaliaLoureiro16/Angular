(function() {
    'use strict';

    angular.module('app').service('taskServicePut', function($http){
        this.attLista = function(aluno){
            return $http.put('http://localhost:8083/listaChamada/update',aluno);
            }

        });
})();