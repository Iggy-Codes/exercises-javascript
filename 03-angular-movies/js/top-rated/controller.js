/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('TopRatedController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getTopRatedMovies()
      .then(function (response) {
        $scope.movies = response.data.results
      })
    $scope.titleSection = 'Top Rated'
  })
