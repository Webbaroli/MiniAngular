(function() {

    'use strict';

    angular
        .module('myApp.view2', [])
        .config(configFunction)
        .controller('View2Ctrl', controllerFunction)
        .run(runFunction)
    ;

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        console.log("Config 2");
        $stateProvider.state('view2', {
            url: '/view2',
            views: {
                '': {
                    templateUrl: 'view2/view2.html',
                    controller: 'View2Ctrl'
                }
            }
        });
    }

    runFunction.$inject = [];
    function runFunction(){
        console.log("Run 2")
    }

    controllerFunction.$inject = [];
    function controllerFunction() {
        console.log("view 2 controller");
    }

})();