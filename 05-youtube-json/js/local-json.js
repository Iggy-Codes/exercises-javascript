$('#click-me').on('click', function () {
  $.ajax({
    url: 'materials/youtube.json'
  })
  .done(function (response) {
    var title = response.data.items[0].title
    $('h1').html(title)
    $('img').attr('src', response.data.items[0].thumbnail.default)
    $('img').wrap('<a href="' + response.data.items[0].player.default + '"/a></a>')
  })
})
