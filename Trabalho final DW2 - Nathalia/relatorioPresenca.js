(function() {
    'use strict';

    angular.module('app').controller('relatorioController', function ($scope, $http,taskServiceGet) {
        $scope.aluno = {id:'',nomeAluno: '', quantidaDePresenca: 0, presente: false};

        $scope.pegarLista = function(aluno){
        taskServicePost.pegarLista(aluno).then(function(response) {
          });
         }
    });
})();
