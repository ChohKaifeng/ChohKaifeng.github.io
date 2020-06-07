function userInputs() {
    var inputLength, inputUnit, scale, convertedUnit;
    inputLength = parseFloat(document.getElementById('length').value);
    inputUnit = document.getElementById('inputUnit').value;
    scale = document.getElementById('scale').value;
    convertedUnit = document.getElementById('convertedUnit').value;

    // Split Scale then convert it to number
    var scaleInputs = scale.split(':');
    for (var i = 0; i < scaleInputs.length; i++) {
        scaleInputs[i] = parseFloat(scaleInputs[i]);
    }

    console.log(scaleInputs);
    // Types of Messages
    var errMsg = 'Input is not a number!';
    var errMsg2 = 'Please enter a positive number that is greater than 0!';
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

    // Check if scaleInputs is a number & contains 2 numbers
    if (scaleInputs.length != 2 || (isNaN(scaleInputs[0]) === true || isNaN(scaleInputs[1]) === true)) {
        $('#msg2').html('');
        $('#msg2').removeClass('text-success');
        $('#msg2').addClass('text-danger');
        $('#msg2').append(`<b>${errMsg}</b>`);
    } else if (scaleInputs.length === 2 || isNaN(scaleInputs[0]) === false && isNaN(scaleInputs[1]) === false) {
        // Check if scaleInputs is a postive number and is greater than 0
        if (Math.sign(scaleInputs[0]) === 1 && Math.sign(scaleInputs[1]) === 1) {
            $('#msg2').html('');
            $('#msg2').removeClass('text-danger');
            $('#msg2').addClass('text-success');
            $('#msg2').append(`<b>${successMsg}</b>`);
        } else {
            $('#msg2').html('');
            $('#msg2').removeClass('text-success');
            $('#msg2').addClass('text-danger');
            $('#msg2').append(`<b>${errMsg2}</b>`);
        }
    }

    // Execute only if both are valid are numbers, scaleInputs is a postive number and is greater than 0 and if there is 2 comparing numbers
    if (scaleInputs.length === 2 && isNaN(scaleInputs[0]) === false && isNaN(scaleInputs[1]) === false) {
        ScaleConverter(inputLength, inputUnit, scaleInputs, convertedUnit);
    }
}

function ScaleConverter(inputLength, inputUnit, scaleInputs, convertedUnit) {
    var inputInMetre, convertedNValue, convertedInput;
    var toDeciPrefix = Math.pow(10, 1);
    var toKiloPrefix = Math.pow(10, -3);
    var toCentiPrefix = Math.pow(10, 2);
    var toMilliPrefix = Math.pow(10, 3);
    var toMicroPrefix = Math.pow(10, 6);
    var toNanoPrefix = Math.pow(10, 9);
    var fromDeciPrefix = Math.pow(10, -1);
    var fromKiloPrefix = Math.pow(10, 3);
    var fromCentiPrefix = Math.pow(10, -2);
    var fromMilliPrefix = Math.pow(10, -3);
    var fromMicroPrefix = Math.pow(10, -6);
    var fromNanoPrefix = Math.pow(10, -9);

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

    // Convert it such that its always 1:n, where n is the new scale
    if (scaleInputs[0] != 1) {
        var division = scaleInputs[0];
        scaleInputs[0] /= division;
        scaleInputs[1] /= division;
    }

    // Convert n such that it is both still in metres
    convertedNValue = inputInMetre * scaleInputs[1];

    // Convert to End Units
    switch (convertedUnit) {
        case 'Metre':
            convertedInput = convertedNValue;
            break;
        case 'Decimetre':
            convertedInput = convertedNValue * toDeciPrefix;
            break;
        case 'Kilometre':
            convertedInput = convertedNValue * toKiloPrefix;
            break;
        case 'Centimetre':
            convertedInput = convertedNValue * toCentiPrefix;
            break;
        case 'Millimetre':
            convertedInput = convertedNValue * toMilliPrefix;
            break;
        case 'Micrometre':
            convertedInput = convertedNValue * toMicroPrefix;
            break;
        case 'Nanometre':
            convertedInput = convertedNValue * toNanoPrefix;
            break;
    }

    //Round answer to 3 Significant Digits
    var convertedInputSF = convertedInput.toPrecision(3);

    // Append value into textarea
    $('#answer').val(
        `Initial Length: ${inputLength}` + ` ${inputUnit}` +
        '\n' +
        `Scale:  ${scaleInputs[0]}` + " : " + `${scaleInputs[1]}` +
        '\n\n' +
        `ANSWERS:` +
        '\n' +
        `Converted Input: ${convertedInput}` + ` ${convertedUnit}` +
        '\n' +
        `Converted Input (3SF): ${convertedInputSF}`
    );
}
