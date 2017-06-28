$(document).ready(function() {
  $submit = $('.foodBtn');
  $clear = $('.clearBtn');

  $submit.click(matchBeers);
  $clear.click(clearBeers);
})

function matchBeers() {
  $('.beerDisplay').empty();
  var input = $('#foodInput').val();
  input = input.replace(/ /, '_').toLocaleLowerCase();
  var url = 'https://api.punkapi.com/v2/beers?food=' + input;
  $.get(url)
    .then(function(data) {
      if (data.length === 0) {
        alert("FOODY NO GOODY, try again");
      }
      for (var i = 0; i < data.length; i++) {
        $('.beerDisplay').append(
          '<div class="col s12, m6, l4">' +
          '<div class="card medium" style="overflow: scroll;">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
          '<img height="200px" width="100px" class="activator" src="' + data[i].image_url + '" style="width: 55px; margin-left: 1em; margin-top: .5em;" alt="beer label image">' +
          '</div>' +
          '<div class="card-content">' +
          '<span class="card-title activator grey-text text-darken-4">' + '<strong>' +
          data[i].name + '</strong>' + '<i class="material-icons right pairings">' + data[i].food_pairing[0] + '<br>' + data[i].food_pairing[1] + '<br>' + data[i].food_pairing[2] + '</i>' + '</span>' +
          '</div>' +
          '<div class="card-reveal">' +
          '<span class="card-title grey-text text-darken-4">' + '<strong>' + data[i].name + '</strong>' + '<i class="material-icons right">' + 'close' + '</i>' + '</span>' +
          '<p>' + data[i].description + '</p>' +
          '</div>' +
          '</div>'
        )
      }
    })
}

function clearBeers() {
  $('.beerDisplay').empty();
  $('#foodInput').val("");
}
