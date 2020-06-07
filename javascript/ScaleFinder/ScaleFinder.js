function userInputs() {
  var inputLength, inputUnit, inputLength2, inputUnit2;
  inputLength = parseFloat(document.getElementById('length').value);
  inputUnit = document.getElementById('inputUnit').value;
  inputLength2 = parseFloat(document.getElementById('length2').value);
  inputUnit2 = document.getElementById('inputUnit2').value;

  var inputInMetre, inputInMetre2;
  var fromDeciPrefix = Math.pow(10, -1);
  var fromKiloPrefix = Math.pow(10, 3);
  var fromCentiPrefix = Math.pow(10, -2);
  var fromMilliPrefix = Math.pow(10, -3);
  var fromMicroPrefix = Math.pow(10, -6);
  var fromNanoPrefix = Math.pow(10, -9);

  // Convert 1st value to metres
  switch (inputUnit) {
    case 'Metre':
      inputInMetre = inputLength;
      break;
    case 'Decimetre':
      inputInMetre = inputLength * fromDeciPrefix;
      break;
    case 'Kilometre':
      inputInMetre = inputLength * fromKiloPrefix;
      break;
    case 'Centimetre':
      inputInMetre = inputLength * fromCentiPrefix;
      break;
    case 'Millimetre':
      inputInMetre = inputLength * fromMilliPrefix;
      break;
    case 'Micrometre':
      inputInMetre = inputLength * fromMicroPrefix;
      break;
    case 'Nanometre':
      inputInMetre = inputLength * fromNanoPrefix;
      break;
  }

  // Convert 2nd value to metres
  switch (inputUnit2) {
    case 'Metre':
      inputInMetre2 = inputLength2;
      break;
    case 'Decimetre':
      inputInMetre2 = inputLength2 * fromDeciPrefix;
      break;
    case 'Kilometre':
      inputInMetre2 = inputLength2 * fromKiloPrefix;
      break;
    case 'Centimetre':
      inputInMetre2 = inputLength2 * fromCentiPrefix;
      break;
    case 'Millimetre':
      inputInMetre2 = inputLength2 * fromMilliPrefix;
      break;
    case 'Micrometre':
      inputInMetre2 = inputLength2 * fromMicroPrefix;
      break;
    case 'Nanometre':
      inputInMetre2 = inputLength2 * fromNanoPrefix;
      break;
  }

  // Types of Messages
  var errMsg = 'Input is not a number!';
  var errMsg2 = 'Length 2 must be smaller than Length 1';
  var successMsg = 'Valid Input!';

  // Check if inputLength is a number
  if (isNaN(inputLength) === true) {
    $('#msg1').html('');
    $('#msg1').removeClass('text-success');
    $('#msg1').addClass('text-danger');
    $('#msg1').append(`<b>${errMsg}</b>`);
  } else if (isNaN(inputLength) === false) {
    $('#msg1').html('');
    $('#msg1').removeClass('text-danger');
    $('#msg1').addClass('text-success');
    $('#msg1').append(`<b>${successMsg}</b>`);
  }

  // Check if inputLength2 is a number
  if (isNaN(inputInMetre) === true) {
    $('#msg2').html('');
    $('#msg2').removeClass('text-success');
    $('#msg2').addClass('text-danger');
    $('#msg2').append(`<b>${errMsg}</b>`);
  } else if (isNaN(inputInMetre2) === false) {
      $('#msg2').html('');
      $('#msg2').removeClass('text-danger');
      $('#msg2').addClass('text-success');
      $('#msg2').append(`<b>${successMsg}</b>`);
  }

  // Execute only if both are numbers
  if (isNaN(inputInMetre2) === false && isNaN(inputInMetre) === false) {
    ScaleFinder(inputLength,inputLength2,inputUnit,inputUnit2,inputInMetre, inputInMetre2);
  }
}

function ScaleFinder(inputLength,inputLength2,inputUnit,inputUnit2,inputInMetre, inputInMetre2) {
  console.log(inputLength,inputLength2,inputInMetre, inputInMetre2);
  // Convert it such that its always 1:n, where n is the new scale
  if (inputInMetre != 1) {
    var division = inputInMetre;
    inputInMetre /= division;
    inputInMetre2 /= division;
  }

  //Round answer to 3 Significant Digits
  var convertedInputSF = inputInMetre.toPrecision(3);
  var convertedInput2SF = inputInMetre2.toPrecision(3);

  // Append value into textarea
  $('#answer').val(
    `Length 1 is ${inputLength}` +
      ` ${inputUnit}` +
      '\n' +
      `Length 2 is ${inputLength2}` +
      ` ${inputUnit2}` +
      '\n\n' +
      `ANSWERS:` +
      '\n' +
      `Converted Input: ${inputInMetre}` +
      ' : ' +
      `${inputInMetre2}` +
      '\n' +
      `Converted Input (3SF): ${convertedInputSF}` +
      ' : ' +
      `${convertedInput2SF}`
  );
}
