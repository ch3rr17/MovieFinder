(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ['$http', '$q', '$log', '$stateParams'];

    /* @ngInject */
    function MovieFactory($http, $q, $log, $stateParams) {
        var service = {
            getMovies: getMovies,
            grabMovieDetails: grabMovieDetails
        };

        return service;

        function getMovies(movie) {
            var url = 'http://www.omdbapi.com/?s=';
            var defer = $q.defer();
            $http({
                    method: 'GET',
                    url: url + movie
                })
                .then(
                    function(response) {
                        defer.resolve(response.data);
                    },
                    function(error) {
                        defer.reject(error);
                    }
                );

            return defer.promise;

        }

        function grabMovieDetails() {
            var url = 'http://www.omdbapi.com/?t='
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: url + $stateParams.movie
                })
                .then(
                    function(response) {
                        defer.resolve(response.data);
                    },
                    function(error) {
                        defer.reject(error);
                    }
                );

            return defer.promise;
        }



    }
})();
