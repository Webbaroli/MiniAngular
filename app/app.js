(function() {

    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'myApp.view1',
            'myApp.view2'
        ])
        .config(configFunction)
    ;

    configFunction.$inject = ['$urlRouterProvider'];

    function configFunction($urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');
    }

})();