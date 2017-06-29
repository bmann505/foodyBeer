$(document).ready(function() {
  $('.modal').modal();
  $submit = $('.foodBtn');
  $clear = $('.clearBtn');
  $rotate = $('.rotate');

  $submit.click(matchBeers);
  $clear.click(clearBeers);
  $rotate.click(randomTap);
});

function matchBeers() {
  $('.beerDisplay').empty();
  $('.random').empty();
  var input = $('#foodInput').val();
  input = input.replace(/ /, '_').toLocaleLowerCase();
  var url = 'https://api.punkapi.com/v2/beers?food=' + input;
  $.get(url)
    .then(function(data) {
      if (data.length === 0) {
        alert("FOODY NO GOODY, try again");
        $('#foodInput').val("");
      }
      for (var i = 0; i < data.length; i++) {
        $('.beerDisplay').append(
          '<div class="col s12 m6 l4">' +
          '<div class="card small" style="overflow: scroll;">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
          '<img height="120px" width="60px" class="activator" src="' + data[i].image_url + '" style="width: 55px; margin-left: 1em; margin-top: .5em;" alt="beer label image">' +
          '</div>' +
          '<div class="title">' +
          '<span class="card-title activator grey-text text-darken-4">' + data[i].name + '</span>' +
          '</div>' +
          '<div class="card-content">' +
          '<span class="activator grey-text text-darken-4">' + data[i].food_pairing[0] + '<br>' + data[i].food_pairing[1] + '<br>' + data[i].food_pairing[2] + '</span>' +
          '</div>' +
          '<div class="card-reveal">' +
          '<span class="card-title grey-text text-darken-4">' + data[i].name + '<i class="material-icons right">' + 'X' + '</i>' + '</span>' +
          '<p>' + data[i].description + '</p>' +
          '</div>' +
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

function randomTap() {
  $.get('https://api.punkapi.com/v2/beers/random')
    .then(function(data) {
      clearModal();
      $('.modal-image').attr("src", data[0].image_url);
      $('.modal-title').append(data[0].name);
      $('.modal-pairing1').append(data[0].food_pairing[0]);
      $('.modal-pairing2').append(data[0].food_pairing[1]);
      $('.modal-pairing3').append(data[0].food_pairing[2]);
      $('.modal-description').append(data[0].description);
    })
}

randomTap();

function clearModal() {
  $('.modal-title').empty();
  $('.modal-image').empty();
  $('.modal-pairing1').empty();
  $('.modal-pairing2').empty();
  $('.modal-pairing3').empty();
  $('.modal-description').empty();
}
