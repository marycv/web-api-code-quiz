// DECLARE 'countdown' variable
var countdown = (0);

// DECLARE the 'question' array 
    // DECLARE a variable to store the index in the 'question' array
var questionPosition = 0;
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        correctAnswer: "C. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answer: ["A. quotes", "B. curly brackets", "C. parentheses", "D. square brackets"],
        correctAnswer: "C. parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        correctAnswer: "D. all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["A. commas", "B. curly brackets", "C. quotes", "D. parentheses"],
        correctAnswer: "C. quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console log"],
        correctAnswer: "D. console log",
    },
];



// DECLARE the 'timerEl' variable
var timerEl = document.querySelector("#timer");

// DECLARE 'timerInterval' variable
var timerInterval;

// DECLARE the 'secondsLeft' variable
var secondsLeft = 75;

// Function to 'startTimer'
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

var startButton = document.querySelector('#startQuiz');
var startEl = document.querySelector('#start');

// Function to 'startGame'
function startGame() {
    // Hide the start screen
    startEl.classList.add("hide");
    // Show the Quiz page
    questionEl.classList.remove("hide");
    answersEl.classList.remove("hide");
    // Set the question position to 0
    questionPosition = 0;
    // Display the current question
    displayCurrentQuestion();

    // Set the starting value of 'countdown'
    // countdown = 75;

    // Start the timer calling the 'startTimer' function
    startTimer();

        // IF 'countdown' === 0 THEN 'endGame()'
    
}

startButton.addEventListener('click', startGame);

// Grabs current question
// var currentQuestion = questionArray[questionPosition];

var answersEl = document.getElementById('answers');
var questionEl = document.getElementbyId('question');

// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {
    let question = questionArray.question;

    questionEl.textContent = questionArray.questionEl;

    for (i = 0; i < question; i++) {
        var currentQuestion = question[i];
        var answerList = document.querySelector('#answer' + i);
        answerList.textContent = currentQuestion;
    }
}

// Function 'endGame'

    // Hide the questions area

    // Show the record high score

    // Clear the timer interval to stop it from running

// Function to 'answerQuestion'

    // Check if the selected answer is correct

        // IF the answer is wrong

            // THEN we need to subtract from our 'countdown'
    
    // Increasing the question position by 1

    // IF I've passed the last question
        
        // THEN 'endGame()'

    // ELSE

    // Display the next question

        // questionPosition++





// Function 'recordHighScore'

