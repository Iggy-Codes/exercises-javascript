/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('UpcomingController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getUpcomingMovies()
      .then(function (response) {
        $scope.movies = response.data.results
        $scope.baseUrlPhotos = 'https://image.tmdb.org/t/p/' + 'w185' + '/'
      })
    $scope.titleSection = 'Upcoming'
  })

