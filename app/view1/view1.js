(function() {

    'use strict';

    angular
        .module('myApp.view1', [])
        .config(configFunction)
        .controller('View1Ctrl', controllerFunction)
        .run(runFunction)
    ;

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        console.log("Config 1");
        $stateProvider.state('view1', {
            url: '/view1',
            views: {
                '': {
                    templateUrl: 'view1/view1.html',
                    controller: 'View1Ctrl'
                }
            }
        });
    }

    runFunction.$inject = [];
    function runFunction(){
        console.log("Run 1")
    }

    controllerFunction.$inject = [];
    function controllerFunction() {
        console.log("view 1 controller");
    }

})();