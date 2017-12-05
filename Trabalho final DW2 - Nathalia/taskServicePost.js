(function() {
    'use strict';

    angular.module('app').service('taskServicePost', function($http){
        this.addLista = function(aluno){
            return $http.post('http://localhost:8083/listaChamada/add/',aluno);
            }

        });
})();
