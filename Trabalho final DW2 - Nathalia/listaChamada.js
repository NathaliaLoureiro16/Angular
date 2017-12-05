(function() {
    'use strict';

    angular.module('app').controller('listaController', function ($scope,$http, $rootScope,taskServiceGet,taskServicePut) {
        $scope.aluno = {id:'',nomeAluno: '', quantidaDePresenca: 0, presente: false};

        if (!$rootScope.listaChamada){
            $rootScope.listaChamada = []
           }

        taskServiceGet.pegarLista().then(function(response) {
        console.log(response.data);
         $rootScope.listaChamada = response.data;
          });

          $scope.chamada = function(idAluno){
            for(var i = 0; i < $rootScope.listaChamada.length; i++){
                var aluno = $rootScope.listaChamada[i];
            

                if(aluno.id == idAluno){
                     aluno.presente = !aluno.presente;
                 if (aluno.presente) {
                    aluno.quantidaDePresenca = aluno.quantidaDePresenca +1;
                 }else{
                     aluno.quantidaDePresenca = aluno.quantidaDePresenca -1;
                     }
                    $rootScope.listaChamada[i] = aluno;
                }
              }
            }
            $scope.attLista = function(){
            for(var i = 0; i < $rootScope.listaChamada.length; i++){ 
                var aluno = $rootScope.listaChamada[i]; 
                if(aluno.presente === true){
                 aluno.presente = !aluno.presente;
                 taskServicePut.attLista(aluno).then(function(response) {
                    console.log(response.data);
              });
             }
            }
             alert('Presença contabilizada!');
         }
    });     
})();

    
    