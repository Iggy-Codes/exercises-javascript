/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('NowPlayingController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getNowPlayingMovies()
      .then(function (response) {
        $scope.movies = response.data.results
      })
    $scope.titleSection = 'Now Playing'
  })
