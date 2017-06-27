$(document).ready(function() {
  $submit = $('.foodBtn');

  $submit.click(matchBeers);
})

// function getMatchingBeers() {
//   var input = $('#foodInput').val();
//   input = input.replace(/ /, '_');
//   console.log(input);
//   var url = 'https://api.punkapi.com/v2/beers?food=' + input;
//   console.log(url);
//   $.get('https://api.punkapi.com/v2/beers?food=' + input)
//     .then(function(data) {
//       console.log("get request", data);
//       for (var i = 0; i < data.length; i++) {
//         displayTitle(data[i].name);
//         displayImage(data[i].image_url);
//         displayDescription(data[i].description)
//       }
//     });
// }
//
// function displayTitle(title, element) {
//   $('.beerDisplay').append('<h5 class="header">' + title + '</h5>');
// }
//
// function displayImage(url, element) {
//   $('.beerDisplay').append('<img width="50px" height="100px" src= "' + url + '">');
// }
//
// function displayDescription(description, element) {
//   $('.beerDisplay').append('<p class="card-content">' + description + '</p');
// }

function matchBeers() {
  var input = $('#foodInput').val();
  input = input.replace(/ /, '_');
  var url = 'https://api.punkapi.com/v2/beers?food=' + input;
  $.get(url)
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        $('.beerDisplay').append(
          '<div class="col s12, m6, l4">' +
          '<h5 class="header">' + data[i].name + '</h5>' +
          '<div class="card-image">' +
          '<img width="50px" height="100px" src="' + data[i].image_url + '" alt="beer label image">' +
          '</div>' +
          '<div class="card-stacked">' +
          '<div class="card-content">' +
          '<p>' + data[i].description + '</p>' +
          '</div>' +
          '</div>'
        )
      }
    })
}
