(function() {
    'use strict';

    angular.module('app').controller('alunoController', function ($scope, $http,taskServicePost) {
        $scope.aluno = {id:'',nomeAluno: '', quantidaDePresenca: 0, presente: false};

        $scope.addLista = function(aluno){
        taskServicePost.addLista(aluno).then(function(response) {
        console.log(response.data);
        alert('Incluido com sucesso!');
    
          });
         }
    });
})();
