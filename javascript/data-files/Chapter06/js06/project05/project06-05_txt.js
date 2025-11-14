"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: Grant Hayes
      Date:   11/13/25

      Filename: project06-05.js
*/

window.addEventListener("load", function() {
   calcCart();
   
   document.getElementById("regSubmit").onclick = sessionTest;   
   
   document.getElementById("fnBox").onblur = calcCart;
   document.getElementById("lnBox").onblur = calcCart; 
   document.getElementById("groupBox").onblur = calcCart;   
   document.getElementById("mailBox").onblur = calcCart;   
   document.getElementById("phoneBox").onblur = calcCart;   
   document.getElementById("sessionBox").onchange = calcCart;   
   document.getElementById("banquetBox").onblur = calcCart; 
   document.getElementById("mediaCB").onclick = calcCart;   
});

function sessionTest() {
   var confSession = document.getElementById("sessionBox");

   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   } else {
      confSession.setCustomValidity("");
   }
}

function calcCart() {
   let guestCount = document.forms.register.elements.banquetGuests.value;
   let guestCost = guestCount * 55;

   document.getElementById("regBanquet").textContent = guestCount;

   let sessionCost = 0;
   let sessionChoice = "";

   let selectedSession = document.getElementById("sessionBox").selectedIndex;

   if (selectedSession !== -1) {
      sessionChoice = document.forms.register.elements.sessionBox[selectedSession].text;
      sessionCost = document.forms.register.elements.sessionBox[selectedSession].value;
   }

   let mediaCost = 0;
   let mediaChoice = "";

   if (document.forms.register.elements.mediaCB.checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }

   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;

   document.getElementById("regName").textContent =
      document.forms.register.elements.firstName.value + " " +
      document.forms.register.elements.lastName.value;

   document.getElementById("regGroup").textContent =
      document.forms.register.elements.group.value;

   document.getElementById("regEmail").textContent =
      document.forms.register.elements.email.value;

   document.getElementById("regPhone").textContent =
      document.forms.register.elements.phoneNumber.value;

   document.getElementById("regSession").textContent = sessionChoice;

   document.getElementById("regPack").textContent = mediaChoice;

   document.getElementById("regTotal").textContent =
      totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
