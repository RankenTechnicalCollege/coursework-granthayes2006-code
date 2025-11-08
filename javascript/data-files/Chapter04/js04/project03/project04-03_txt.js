/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Grant Hayes
      Date:   11/8/25

      Filename: project04-03.js
*/

"use strict";

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// References to elements in the web page
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Clear any existing warning
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  const commentText = document.getElementById("comment").value;
  const charCount = countCharacters(commentText);

  // Try-catch-finally block for handling errors
  try {
    if (charCount > MAX_REVIEW) {
      throw new Error("You have exceeded the character count limit");
    }
  } catch (err) {
    warningBox.innerHTML = err.message;
  } finally {
    wordCountBox.innerHTML = charCount;
  }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
  // Return the total number of characters (including spaces)
  return textStr.length;
}
