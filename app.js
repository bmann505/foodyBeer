$(document).ready(function() {
  $('.modal').modal();
  $submit = $('.foodBtn');
  $clear = $('.clearBtn');
  $rotate = $('.rotate');
  $ok = $('.modal-close');

  $submit.click(matchBeers);
  $clear.click(clearBeers);
  $ok.click(clearModal);
  $rotate.click(randomTap);

})

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
      $('#modal1').append(
        '<div class="modal-content">' +
        '<h4 class="modal-title">' + data[0].name + '</h4>' +
        '<img height="275px" width="100px" class="activator modal-image" src="' + data[0].image_url + '" style="margin-left: 1em; margin-top: .5em;" alt="beer label image">' +
        '<h6>' + 'Food Pairing' + '</h6>' +
        '<p class="modal-pairing">' + data[0].food_pairing[0] + '<br>' + data[0].food_pairing[1] + '<br>' + data[0].food_pairing[2] + '</p>' +
        '<h6>' + 'Description' + '</h6>' +
        '<p class="modal-description">' + data[0].description + '</p>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<a href="#!" class="modal-action modal-close waves-effect waves-orange btn-flat">Ok</a>' +
        '</div>'
      )
    })
}
// randomTap();

function clearModal() {
  $('#modal1').html("");
}
