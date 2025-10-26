/*
   JavaScript 7th Edition
   Chapter 2
   Project 02-05

   Application to create an online calculator
   Author: Grant Hayes
   Date:   10/26/25

   Filename: project02-05.js
*/
document.getElementById("button0").onclick = function() {
   runCalculator(0);
};

document.getElementById("button1").onclick = function() {
   runCalculator(1);
};

document.getElementById("button2").onclick = function() {
   runCalculator(2);
};

document.getElementById("button3").onclick = function() {
   runCalculator(3);
};

document.getElementById("button4").onclick = function() {
   runCalculator(4);
};

document.getElementById("button5").onclick = function() {
   runCalculator(5);
};

document.getElementById("button6").onclick = function() {
   runCalculator(6);
};

document.getElementById("button7").onclick = function() {
   runCalculator(7);
};

document.getElementById("button8").onclick = function() {
   runCalculator(8);
};

document.getElementById("button9").onclick = function() {
   runCalculator(9);
};

document.getElementById("buttonAdd").onclick = function() {
   runCalculator("+");
};

document.getElementById("buttonMinus").onclick = function() {
   runCalculator("-");
};

document.getElementById("buttonMultiply").onclick = function() {
   runCalculator("*");
};

document.getElementById("buttonDivide").onclick = function() {
   runCalculator("/");
};

document.getElementById("buttonDecimal").onclick = function() {
   runCalculator(".");
};

document.getElementById("buttonEnter").onclick = function() {
   runCalculator("");
};

document.getElementById("buttonClear").onclick = function() {
   clearCalculator();
};

function runCalculator(character) {
   let calcValue = document.getElementById("calcWindow").value;

   if (character !== "") {
      calcValue += character;
   } else {
      calcValue += " = " + evalEq(calcValue) + "\n";
   }

   document.getElementById("calcWindow").value = calcValue;
}

function clearCalculator() {
   document.getElementById("calcWindow").value = "";
}

function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length - 1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}
