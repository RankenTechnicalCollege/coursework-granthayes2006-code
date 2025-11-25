"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Grant Hayes
      Date:   11/8/25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

// Step 3: Declare the ID for timed commands
let timeID;

// Step 4: Create the node list of quiz questions
let questionList = document.querySelectorAll("div#quiz input");

// Step 5: Add the onclick event handler to start the quiz
startQuiz.onclick = function() {
   // Reveal quiz overlay
   overlay.className = "showquiz";
   // Run countdown every 1 second, store the ID
   timeID = setInterval(countdown, 1000);
};

// Step 6: Create the countdown function
function countdown() {
   if (timeLeft === 0) {
      // Stop timer
      clearInterval(timeID);

      // Check answers and count correct responses
      let totalCorrect = checkAnswers();

      // Step 6a: If all correct
      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You got 100% on the quiz!");
      } else {
         // Step 6b: If not all correct
         alert(`You got ${correctAnswers.length - totalCorrect} incorrect out of ${correctAnswers.length}.`);

         // Reset timer and quiz
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   } else {
      // Step 6c: If time left, decrement and update clock
      timeLeft--;
      quizClock.value = timeLeft;
   }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

