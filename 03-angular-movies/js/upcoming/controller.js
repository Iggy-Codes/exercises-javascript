/* eslint no-undef: "off" */
angular.module('appMovies')
  .controller('UpcomingController', function ($scope, AppMoviesFactory) {
    AppMoviesFactory.getUpcomingMovies()
      .then(function (response) {
        $scope.movies = response.data.results
      })
    $scope.titleSection = 'Upcoming'
  })

