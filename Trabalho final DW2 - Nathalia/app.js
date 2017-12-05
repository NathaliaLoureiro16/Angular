(function() {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
        .when('/cadastroAluno',{
            templateUrl: 'cadastroAluno.html'
        })
        .when('/listaChamada',{
            templateUrl: 'listaChamada.html'
        })
        .when('/relatorioPresenca',{
            templateUrl: 'relatorioPresenca.html' 
        })
        .otherwise({redirectTo: '/'});
    });
})();