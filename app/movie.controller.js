(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['MovieFactory', '$log'];

    /* @ngInject */
    function MovieController(MovieFactory, $log) {
        var vm = this;

        //holds array for movies
        vm.movie = [];

        vm.grabMovies = function() {
            MovieFactory.getMovies(vm.movie)
                .then(
                    function(response) {
                        vm.movies = response;
                        console.log(response);
                        vm.movie = ''; //clear input
                    },


                    function(error) {
                        $log.error(console.error);
                    }
                );
        }

        vm.grabMovies();
    }

})();
