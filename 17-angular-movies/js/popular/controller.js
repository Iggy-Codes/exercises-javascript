/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('PopularController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getPopularMovies()
      .then(function (response) {
        $scope.movies = response.data.results
        $scope.baseUrlPhotos = 'https://image.tmdb.org/t/p/' + 'w185' + '/'
      })
    $scope.titleSection = 'Popular'
  })
