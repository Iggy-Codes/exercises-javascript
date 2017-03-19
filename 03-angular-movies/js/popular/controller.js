/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('PopularController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getPopularMovies()
      .then(function (response) {
        $scope.movies = response.data.results
      })
    $scope.titleSection = 'Popular'
  })
