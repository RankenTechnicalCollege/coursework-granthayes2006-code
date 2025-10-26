/*
   JavaScript 7th Edition
   Chapter 2
   Project 02-03

   Application to display feedback when hovering over shapes
   Author: Grant Hayes
   Date: 10/26/25

   Filename: project02-03.js
*/
document.getElementById("square").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the square";
};
document.getElementById("square").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

document.getElementById("triangle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
};
document.getElementById("triangle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

document.getElementById("circle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the circle";
};

document.getElementById("circle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};
