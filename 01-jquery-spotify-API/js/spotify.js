/* eslint no-undef: "off" */

$('#search-artists form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
        .done(function (response) {
          var listArtists = response.artists.items
          var optionsArtists = listArtists.map(function (elem) {
            return "<option value='" + elem.id + "'>" + elem.name + '</option>'
          })
          // console.log(optionsArtists)
          optionsArtists.unshift('<option disabled selected>Select an artist ...</option>')
          // console.log(optionsArtists)
          $('#list-artists').html(optionsArtists.join(''))
          $('#list-artists').focus()

          $('#select-artist').removeClass('hidden')
          $('#select-album').addClass('hidden')
          $('#list-tracks').addClass('hidden')
        })

  $('#select-artist form').on('change', function (e) {
    // e.preventDefault()
    var valueIdArtist = $(this).find('#list-artists').val()
    var urlListAlbumByArtist = 'https://api.spotify.com/v1/artists/{id}/albums'
              // console.log(valueIdArtist)
    $.ajax({
      url: urlListAlbumByArtist.replace('{id}', valueIdArtist)
    })
    .done(function (response) {
      var listAlbums = response.items
      var optionsAlbums = listAlbums.map(function (elem) {
        return '<option value="' + elem.id + '">' + elem.name + '</option>'
      })
      optionsAlbums.unshift('<option disabled selected>Select an album ...</option>')
      $('#list-albums').html(optionsAlbums.join(''))
      $('#list-albums').focus()
      $('#select-album').removeClass('hidden')
      $('#list-tracks').addClass('hidden')
    })
  })
})

$('#select-album form').on('change', function (e) {
  var valueIdAlbum = $(this).find('#list-albums').val()
  var urlListAlbumByArtist = 'https://api.spotify.com/v1/albums/{id}/tracks'
  var urlGetTracksAlbum = urlListAlbumByArtist.replace('{id}', valueIdAlbum)
  $.ajax({
    url: urlGetTracksAlbum
  })
  .done(function (response) {
    console.log(response)
    var listTracks = response.items
    listTracks = listTracks.map(function (elem) {
      return '<li><a href="' + elem.preview_url + '" target="_blank">' + elem.name + '</a></li>'
    })
    $('#list-tracks ol').html(listTracks.join('\n'))
    $('#list-tracks').removeClass('hidden')
  })
})

// $('#select-artist form').on('submit', function (e) {
//   e.preventDefault()

//   var urlListAlbumByArtist = 'https://api.spotify.com/v1/artists/{id}/albums'
//   var valueIdArtist = $(this).find('#list-artists').val()
//   console.log(valueIdArtist)
//   $.ajax({
//     url: urlListAlbumByArtist.replace('{id}', valueIdArtist)
//   })
//   .done(function (idAlbum) {
//     var urlGetTracksAlbum = 'https://api.spotify.com/v1/albums/{id}/tracks'
//     $.ajax({
//       url: urlGetTracksAlbum.replace('{id}', idAlbum)
//     })
//     .done(function (response) {
//       console.log(response)
//     })
//   })
// })

// $('#search-select form').on('submit', function (e) {
//   e.preventDefault()
//   var url'https://api.spotify.com/v1/albums/{id}/tracks'
// })
