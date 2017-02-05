/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('NowPlayingController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getNowPlayingMovies()
      .then(function (response) {
        $scope.movies = response.data.results
        $scope.baseUrlPhotos = 'https://image.tmdb.org/t/p/' + 'w185' + '/'
      })
    $scope.titleSection = 'Now Playing'
  })
