var a = 1;
var b = 1;
var c = -1;

// var a = 0;
// var b = 3;
// var c = 1.125; //4
QuadraticFormulaSolver(a, b, c);

function QuadraticFormulaSolver(a, b, c) {
  // errorMsg = The error Message
  // discriminant = b^2 - 4ac
  // rootedDiscriminant = Square root of discriminant
  // convertedDiscriminant = Only used IF discriminant is negative value
  // numerator1 = -b + rootedDiscriminant; numerator2 = -b - rootedDiscriminant
  // ans1 = first answer of x; second answer of x
  var errorMsg, discriminant, rootedDiscriminant, convertedDiscriminant, numerator1, numerator2, ans1, ans2;

  // Checks if value of A is 0;
  // If Not 0, Proceed on to calcuate quadratic formula
  if (a === 0) {
    errorMsg = 'Not an Quadratic Equation! Value for A cannot be 0!';
    console.log(errorMsg);
  } else {
    // Solving for the discriminant part
    discriminant = Math.pow(b, 2) - 4 * (a * c);

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

      // Getting the X-values
      ans1 = numerator1 / (2 * a);
      ans2 = numerator2 / (2 * a);
    } else if (Math.sign(discriminant) === 0) {
      // Calculating Numerator
      numerator1 = -b + rootedDiscriminant;

      // Getting the X-values
      ans1 = numerator1 / (2 * a);
      ans2 = 'Only 1 Root Value as Sum of Discriminant is 0';
    } else if (Math.sign(discriminant) === -1) {
      // Calculating Negative B
      numerator1 = -b / (2 * a);
      // Imaginary Number
      var ImaginaryNumber = rootedDiscriminant / (2 * a);
      var roundedImaginaryNumber = ImaginaryNumber.toFixed(9);
      // Getting the X-values
      ans1 = numerator1 + ' + ' + roundedImaginaryNumber + 'i';
      ans2 = numerator1 + ' - ' + roundedImaginaryNumber + 'i';
    }

    console.log(ans1);
    console.log(ans2);
  }
}
