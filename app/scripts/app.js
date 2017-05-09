(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: false,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });


    }

    angular
        .module('bloc-chat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies', 'luegg.directives'])
        .config(config);
})();
