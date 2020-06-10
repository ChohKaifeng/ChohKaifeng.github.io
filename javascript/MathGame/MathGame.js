var difficulty, answer;

// Sets the difficulty when button is clicked in MathGameLevel.html
function setDifficulty(difficulty) {
  localStorage.setItem('Difficulty', difficulty);
}

// Get the difficulty when page is loading in MathGame.html & change bg color based on difficulty
function getDifficulty() {
  // Color codes for different difficulty
  var easy = '#95dd87';
  var medium = '#ffde59';
  var difficult = '#febd59';
  var insane = '#ff5757';

  //   Gets the difficulty from local storage
  difficulty = localStorage.getItem('Difficulty');

  //   Change bg color based on difficulty
  switch (difficulty) {
    case 'Easy':
      $('body').css('background-color', easy);
      break;
    case 'Medium':
      $('body').css('background-color', medium);
      break;
    case 'Difficult':
      $('body').css('background-color', difficult);
      break;
    case 'Insane':
      $('body').css('background-color', insane);
      break;
  }

  //   Start the game based on difficulty
  MathGame(difficulty);
}

function MathGame(difficulty) {
  var number1, number2, question, questionStmt;
  // Possible Operators & choosing of operators
  const operators = ['+', '-', '/', '*'];
  var operatorArrayNo = parseInt(Math.random() * operators.length);
  var operatorChosen = operators[operatorArrayNo];

  // If it is divide or minus, number1 should be bigger than number2
  // When dividing, must have no remainders
  // Numbers cannot be 0 when it is minus
  do {
    // Assign Number base on Difficulty
    switch (difficulty) {
      case 'Easy':
        {
          // From 0 to 100
          number1 = parseInt(Math.random() * 10 + 1);
          number2 = parseInt(Math.random() * 10 + 1);
        }
        break;
      case 'Medium':
        {
          // From 0 - 1000
          number1 = parseInt(Math.random() * 100 + 1);
          number2 = parseInt(Math.random() * 10 + 1);
        }
        break;
      case 'Difficult':
        {
          // From 0 - 10000
          number1 = parseInt(Math.random() * 1000 + 1);
          number2 = parseInt(Math.random() * 10 + 1);
        }
        break;
      case 'Insane':
        {
          // From 0 - 10000000
          number1 = parseInt(Math.random() * 10000 + 1);
          number2 = parseInt(Math.random() * 1000 + 1);
        }
        break;
    }
  } while (
    number2 > number1 ||
    (operatorChosen === '-' && number1 - number2 == 0) ||
    (operatorChosen === '/' && number1 % number2 != 0)
  );

  //   Forms the question statement and append it into html
  if (operatorChosen === '+' || operatorChosen === '-') {
    questionStmt = number1.toString() + " " + operatorChosen + " " + number2.toString();
  } else if (operatorChosen === "*") {
    questionStmt = number1.toString() + " x " + number2.toString();
  } else if (operatorChosen === "/"){
    questionStmt = number1.toString() + " ÷ " + number2.toString();
  }

  $('h3.question').append(questionStmt);
  //   Form question string and evaluate answer
  question = number1.toString() + operatorChosen + number2.toString();
  answer = eval(question);
}

// When ans is clicked, check answer
function checkAnswer() {
  var correctSound = document.getElementById("correct");
  var wrongSound = document.getElementById("wrong")
  var userInput = parseInt($('#userAnswer').val());
  var successMsg = 'Correct Answer!';
  var wrongMsg = 'Wrong Answer! Try Again!';

  if (userInput === answer) {
    // Empty question, old message and user answer
    $('h3.question').empty();
    $('h4.msg').empty();
    $('#userAnswer').val('');

    // Removed red color if prev ans was wrong, and add new successMsg that is green
    // Execute function again to obtain new equation
    $('h4.msg').removeClass('text-danger');
    $('h4.msg').append(successMsg).addClass('text-success');
    correctSound.play();
    MathGame(difficulty);
  } else if (userInput != answer) {
    wrongSound.play();
    //  Remove old message and its color, and add new wrongMsg that is red
    $('h4.msg').empty();
    $('h4.msg').removeClass('text-success');
    $('h4.msg').append(wrongMsg).addClass('text-danger');
  }
}
