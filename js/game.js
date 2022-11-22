// DECLARE 'countdown' variable

// DECLARE the 'question' array 
    // DECLARE a variable to store the index in the 'question' array
var questionPosition = 0;
var question = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answer: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3. parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3. quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        correctAnswer: "4. console log",
    },
];

// Grabs current question
var currentQuestion = question[questionPosition];

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

// Function to 'startGame'
function startGame() {
    
}
    // Hide the start screen

    // Set the question position to 0
    // Display the current question
        
    // Set the starting value of 'countdown'

    // Start the timer calling the 'startTimer' function

        // IF 'countdown' === ) THEN 'endGame()'

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

// Function 'displayCurrentQuestion'

// Function 'recordHighScore'

