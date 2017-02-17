(function() {
    'use strict';

    angular
        .module('movieNerdApp', [
            'ui.router'
        ])

        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/main');

            $stateProvider.state('main', {
                    url: '/main',
                    templateUrl: 'app/partials/movies.html',
                    controller: 'MovieController as vm'
                })
                .state('details', {
                    url: '/details/{movie}',
                    templateUrl: 'app/partials/movie-detail.html',
                    controller: 'MovieDetailController as vm'
                })
        });
})();
