(function() {
    'use strict';

   var app = angular.module('Calculadora', [
 ]);
 app.controller('CalculadoraController', function($scope){
     $scope.EventoCalculo = function(calculo) {
         if(calculo.operacao === '+'){
             var valA = parseFloat(calculo.primeiroValor);
             var valB = parseFloat(calculo.segundoValor);
            calculo.resultado = valA + valB;
        }else if(calculo.operacao === '-'){
            var valA = parseFloat(calculo.primeiroValor);
            var valB = parseFloat(calculo.segundoValor);
            calculo.resultado = valA - valB;
            
        }else if(calculo.operacao === '*'){
            var valA = parseFloat(calculo.primeiroValor);
            var valB = parseFloat(calculo.segundoValor);
            calculo.resultado = valA * valB;
        }else{
            var valA = parseFloat(calculo.primeiroValor);
            var valB = parseFloat(calculo.segundoValor);
            calculo.resultado = valA / valB;
        }
    }           
     $scope.calculo = { primeiroValor: 0, segundoValor: 0, operacao: '', resultado: 0};
    
 });

})();
