(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['MovieFactory', '$log', '$stateParams'];

    /* @ngInject */
    function MovieDetailController(MovieFactory, $log, $stateParams) {
        var vm = this;

        vm.movieDetails = function() {
            MovieFactory.grabMovieDetails()
                .then(
                    function(response) {
                        console.log($stateParams.movie)
                        vm.details = response;
                        console.log(response);
                    },
                    function(error) {
                        $log.error(error);
                    }
                );
        }

        vm.movieDetails();
    }
})();
