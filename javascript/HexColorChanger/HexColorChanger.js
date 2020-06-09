colorChange();

function colorChange() {
  // Set default hexValues
  const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var hexHashtag = '#';

  for (var i = 0; i < 6; i++) {
    const value = Math.floor(Math.random() * hexValues.length);
    hexHashtag += hexValues[value];
  }
  //   Empty h3 content before pushing it in
  $('h3').empty();
  $('h3').append(hexHashtag);
  //   Add CSS Property to body
  $('body').css('background-color', hexHashtag);
}
