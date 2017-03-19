/* eslint no-undef: "off" */
angular.module('appMovies')
  .factory('AppMoviesFactory', function ($http) {
    var urlbaseAPI = 'https://api.themoviedb.org/3/movie/'
    var keyAPI = '?api_key=ba09f3c8c6c830377b422df18cfa833e'

    function getPopularMovies () { // eslint-disable-line no-unused-vars
      return $http.get(urlbaseAPI + 'popular' + keyAPI)
    }

    function getNowPlayingMovies () { // eslint-disable-line no-unused-vars
      return $http.get(urlbaseAPI + 'now_playing' + keyAPI)
    }

    function getTopRatedMovies () { // eslint-disable-line no-unused-vars
      return $http.get(urlbaseAPI + 'top_rated' + keyAPI)
    }

    function getUpcomingMovies () { // eslint-disable-line no-unused-vars
      return $http.get(urlbaseAPI + 'upcoming' + keyAPI)
    }

    return {
      getPopularMovies: getPopularMovies,
      getNowPlayingMovies: getNowPlayingMovies,
      getTopRatedMovies: getTopRatedMovies,
      getUpcomingMovies: getUpcomingMovies
    }
  })
