function passTheMessage() {
  const message = document.getElementById('message').value;
  const errMsg = 'Message cannot be empty!';
console.log(message)
  if (message === null || message === undefined || message == '') {
    $('.errMsg').empty();
    $('.errMsg').append(errMsg);
  } else {
    $('.errMsg').empty();
    // Empty textbox & newMessage and append the new message
    $('input[type=text]').val('');
    $('#newMessage').empty();
    $('#newMessage').append(message);
  }
}
