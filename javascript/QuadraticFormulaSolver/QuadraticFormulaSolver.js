function userInputs() {
  var a, b, c;
  a = parseFloat(document.getElementById('valueA').value);
  b = parseFloat(document.getElementById('valueB').value);
  c = parseFloat(document.getElementById('valueC').value);

  // Types of Messages
  var errMsg = 'Input is not a number!';
  var successMsg = 'Valid Input!';

  // Check if valueA is a number
  if (isNaN(a) === true) {
    $('#msg1').html('');
    $('#msg1').removeClass('text-success');
    $('#msg1').addClass('text-danger');
    $('#msg1').append(`<b>${errMsg}</b>`);
  } else if (isNaN(a) === false) {
    $('#msg1').html('');
    $('#msg1').removeClass('text-danger');
    $('#msg1').addClass('text-success');
    $('#msg1').append(`<b>${successMsg}</b>`);
  }

    // Check if valueB is a number
  if (isNaN(b) === true) {
    $('#msg2').html('');
    $('#msg2').removeClass('text-success');
    $('#msg2').addClass('text-danger');
    $('#msg2').append(`<b>${errMsg}</b>`);
  } else if (isNaN(b) === false) {
    $('#msg2').html('');
    $('#msg2').removeClass('text-danger');
    $('#msg2').addClass('text-success');
    $('#msg2').append(`<b>${successMsg}</b>`);
  }

    // Check if valueC is a number
  if (isNaN(c) === true) {
    $('#msg3').html('');
    $('#msg3').removeClass('text-success');
    $('#msg3').addClass('text-danger');
    $('#msg3').append(`<b>${errMsg}</b>`);
  } else if (isNaN(c) === false) {
    $('#msg3').html('');
    $('#msg3').removeClass('text-danger');
    $('#msg3').addClass('text-success');
    $('#msg3').append(`<b>${successMsg}</b>`);
  }

  // Execute only if all 3 are numbers
  if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false) {
    QuadraticFormulaSolver(a, b, c);
  }
}

function QuadraticFormulaSolver(a, b, c) {
  // equation = The equation formed
  // errorMsg = The error Message
  // discriminant = b^2 - 4ac
  // rootedDiscriminant = Square root of discriminant
  // convertedDiscriminant = Only used IF discriminant is negative value
  // numerator1 = -b + rootedDiscriminant; numerator2 = -b - rootedDiscriminant
  // denominator = 2(a)
  // ans1 = first answer of x; second answer of x
  var equation,
    errorMsg,
    discriminant,
    rootedDiscriminant,
    convertedDiscriminant,
    numerator1,
    numerator2,
    denominator,
    ans1,
    ans2;

  //Forms the equation and appends into HTML
  equation = a + 'x' + '2'.sup() + ' + ' + b + 'x' + ' + ' + c;
  console.log(equation);
  $('#equation').html('');
  $('#equation').append(`<b>${equation}</b>`);

  // Checks if value of A is 0;
  // If Not 0, Proceed on to calcuate quadratic formula
  if (a === 0) {
    errorMsg = 'Not an Quadratic Equation! Value for A cannot be 0!';
    $('#answer').val(`ERROR: ${errorMsg}`);
  } else {
    // Solving for the discriminant part
    discriminant = Math.pow(b, 2) - 4 * a * c;

    // If discriminant IS NOT a negative number, square root the discriminant
    // If discriminant IS a negative number, convert it to positive and square root the discriminant
    if (Math.sign(discriminant) != -1) {
      rootedDiscriminant = Math.sqrt(discriminant);
    } else if (Math.sign(discriminant) === -1) {
      convertedDiscriminant = Math.abs(discriminant);
      rootedDiscriminant = Math.sqrt(convertedDiscriminant);
    }

    // Solving for Numerator & X-values
    // when discriminant is positive, we get two real solutions,
    // when discriminant is zero, we get just ONE solution,
    // when discriminant is negative, we get complex solutions. (Imaginary Number)
    if (Math.sign(discriminant) === 1) {
      // Calculating Numerator
      numerator1 = -b + rootedDiscriminant;
      numerator2 = -b - rootedDiscriminant;

      // Calculating Denominator
      denominator = 2 * a;

      // Getting the X-values
      ans1 = numerator1 / denominator;
      ans2 = numerator2 / denominator;

      //Round answer to 3 Significant Digits
      var ans1SF = ans1.toPrecision(3);
      var ans2SF = ans2.toPrecision(3);

      // Append value into textarea
      $('#answer').val(
        `Value of X = ${ans1} OR ${ans2}` +
          '\n' +
          `Value of X (3 S.F)= ${ans1SF} OR ${ans2SF}` +
          '\n\n' +
          `Discriminant: ${discriminant}` +
          '\n' +
          `Numerator (Addition): ${numerator1}` +
          '\n' +
          `Numerator (Subtraction): ${numerator2}` +
          '\n' +
          `Denominator: ${denominator}`
      );
    } else if (Math.sign(discriminant) === 0) {
      // Calculating Numerator
      numerator1 = -b + rootedDiscriminant;

      // Calculating Denominator
      denominator = 2 * a;

      // Getting the X-values
      ans1 = numerator1 / denominator;
      ans2 = 'Only 1 Root Value as sum of discriminant is 0.';

      //Round answer to 3 Significant Digits
      var ans1SF = ans1.toPrecision(3);

      // Append value into textarea
      $('#answer').val(
        `Value of X = ${ans1}` +
          '\n' +
          `Value of X (3 S.F)= ${ans1SF}` +
          '\n\n' +
          `${ans2}` +
          '\n\n' +
          `Discriminant: ${discriminant}` +
          '\n' +
          `Numerator: ${numerator1}` +
          '\n' +
          `Denominator: ${denominator}`
      );
    } else if (Math.sign(discriminant) === -1) {
      // Calculating Negative B
      numerator1 = -b / (2 * a);
      // Imaginary Number
      var ImaginaryNumber = rootedDiscriminant / (2 * a);
      var roundedImaginaryNumber = ImaginaryNumber.toFixed(9);
      // Getting the X-values
      ans1 = numerator1 + ' + ' + roundedImaginaryNumber + 'i';
      ans2 = numerator1 + ' - ' + roundedImaginaryNumber + 'i';
      errorMsg = 'It has complex roots!  Discriminant is a Negative Number!';
      // Append value into textarea
      $('#answer').val(`Value of X = ${ans1}  OR  ${ans2}` + '\n\n' + `${errorMsg}`);
    }
  }
}
