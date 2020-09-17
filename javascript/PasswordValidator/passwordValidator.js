var password = 'K@if3ng._';

// Default boolean values
var passwordValidationResult = false;
var charTest = false;
var alphabetTest = false;
var numberTest = false;
var specialCharTest = false;

// Password Regex
var charRegex = /^.{8,}$/;
var alphabetRegex = /(?=.*[a-z])(?=.*[A-Z])/;
var numRegex = /(?=.*[0-9]+.*)/;
var specialCharRegex = /(?=.*[!@#$%^&*_?|])/;

// Message String
var messageString;

passwordValidator(password);

// Checks that the password has at least 8 character
function checkCharLength(password) {
  if (charRegex.test(password)) {
    charTest = true;
  }
  return charTest;
}

// Check if there is an alphabet & if theres one upper and lower case.
function checkAlphabet(password) {
  if (alphabetRegex.test(password)) {
    alphabetTest = true;
  }
  return alphabetTest;
}

// Check if there is a number
function checkNumber(password) {
  if (numRegex.test(password)) {
    numberTest = true;
  }
  return numberTest;
}

// Check for special character
function checkSpecialChar(password) {
  if (specialCharRegex.test(password)) {
    specialCharTest = true;
  }
  return specialCharTest;
}

function passwordValidator(password) {
  checkCharLength(password);
  checkAlphabet(password);
  checkNumber(password);
  checkSpecialChar(password);

  // If password passes all the tests
  if (charTest === true && alphabetTest === true && numberTest === true && specialCharTest === true) {
    passwordValidationResult = true;
    messageString = 'Password passes the check! Congrats!';
  } else {
    messageString = 'Your password should have the following: \n';

    if (charTest === false) {
      messageString += 'At least 8 Characters \n';
    }
    if (alphabetTest === false) {
      messageString += 'At least 1 uppercase and uppercase alphabet \n';
    }
    if (numberTest === false) {
      messageString += 'At least 1 number \n';
    }
    if (specialCharTest === false) {
      messageString += 'At least 1 special characters \n';
    }
  }

  console.log(messageString);
}