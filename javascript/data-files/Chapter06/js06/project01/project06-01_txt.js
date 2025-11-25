"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Grant Hayes
      Date:   11/13/25

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function (e) {

    e.preventDefault();

    if (!pwd.checkValidity()) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
        pwd.reportValidity();
    } else if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
        pwd2.reportValidity();
    } else {
        pwd.setCustomValidity("");
        pwd2.setCustomValidity("");
        document.getElementById("signupForm").submit();
    }
});
