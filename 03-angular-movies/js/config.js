/* eslint no-undef: "off" */
angular.module('appMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/template.html',
        controller: 'PopularController'
      })
      .when('/upcoming', {
        templateUrl: 'js/template.html',
        controller: 'UpcomingController'
      })
      .when('/nowPlaying', {
        templateUrl: 'js/template.html',
        controller: 'NowPlayingController'
      })
      .when('/topRated', {
        templateUrl: 'js/template.html',
        controller: 'TopRatedController'
      })
  })
