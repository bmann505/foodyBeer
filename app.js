$(document).ready(function() {
  $submit = $('.foodBtn');

  $submit.click(matchBeers);
})

// function matchBeers() {
//   var input = $('#foodInput').val();
//   input = input.replace(/ /, '_').toLowerCase();
//   var url = 'https://api.punkapi.com/v2/beers?food=' + input;
//   $.get(url)
//     .then(function(data) {
//       for (var i = 0; i < data.length; i++) {
//         $('.beerDisplay').append(
//           '<div class="col s12, m6, l4">' +
//           '<h5 class="header">' + data[i].name + '</h5>' +
//           '<div class="card-image">' +
//           '<img width="50px" height="100px" src="' + data[i].image_url + '" alt="beer label image">' +
//           '</div>' +
//           '<div class="card-stacked">' +
//           '<div class="card-content">' +
//           '<p>' + data[i].description + '</p>' +
//           '</div>' +
//           '</div>' +
//           '</div>'
//         )
//       }
//     })
// }

function matchBeers() {
  var input = $('#foodInput').val();
  input = input.replace(/ /, '_').toLocaleLowerCase();
  var url = 'https://api.punkapi.com/v2/beers?food=' + input;
  $.get(url)
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        $('.beerDisplay').append(
          '<div class="col s12, m6, l4">' +
          '<div class="card" style="overflow: scroll;">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
          '<img height="100px" width="50px" class="activator" src="' + data[i].image_url + '" style="width: 55px; margin-left: 1em; margin-top: .5em;" alt="beer label image">' +
          '</div>' +
          '<div class="card-content">' +
          '<span class="card-title activator grey-text text-darken-4">' + data[i].name + '<i class="material-icons right pairings">' + data[i].food_pairing[0] + '<br>' + data[i].food_pairing[1] + '<br>' + data[i].food_pairing[2] + '</i>' + '</span>' +
          '</div>' +
          '<div class="card-reveal">' +
          '<span class="card-title grey-text text-darken-4">' + data[i].name + '<i class="material-icons right">' + 'close' + '</i>' + '</span>' +
          '<p>' + data[i].description + '</p>' +
          '</div>' +
          '</div>'
        )
      }
    })
}