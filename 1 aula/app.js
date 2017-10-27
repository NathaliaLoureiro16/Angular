(function() {
    'use strict';

   var app = angular.module('TodoList', [
 ]);
 app.controller('PrincipalController', function($scope){
     $scope.meuEvento = function() {
         alert('Meu primeiro evento em ANGULAR'); 
     }
    $scope.tarefa = { nome: 'MinhaTarefa'};

    
 });

})();
