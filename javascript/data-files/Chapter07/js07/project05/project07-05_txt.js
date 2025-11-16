"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-05

      Project to compare the distribution of word lengths between two authors
      Author: Grant Hayes
      Date:   11/15/25

      Filename: project07-05.js
*/

// Onchange event handler to load an external file for author 1
document.getElementById("button1").onchange = function() {
   let file = this.files[0];
   let doc = document.getElementById("document1");
   let count = document.getElementById("count1");
   generateWordFreq(file, doc, count);
};

// Onchange event handler to load an external file for author 2
document.getElementById("button2").onchange = function() {
   let file = this.files[0];
   let doc = document.getElementById("document2");
   let count = document.getElementById("count2");
   generateWordFreq(file, doc, count);
};


// Function that generates a table of frequencies for words
// of 1 to 15 characters in length
function generateWordFreq(inputFile, outputDoc, outputCount) {

   let fr = new FileReader();
   fr.readAsText(inputFile);

   fr.onload = function() {

      outputDoc.innerHTML = fr.result;

      let sourceText = outputDoc.innerHTML;
      sourceText = sourceText.replace(/<[^>]*>/g, "");

      let alphaRegx = /[^a-zA-Z\s]/g;
      sourceText = sourceText.replace(alphaRegx, "");

      let words = sourceText.split(/\s+/);

      let freqs = [
         0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0
      ];

      for (let i = 0; i < words.length; i++) {

         if (words[i].length === 0) continue;

         if (words[i].length >= 15) {
            freqs[15]++;
         } else {
            freqs[words[i].length]++;
         }
      }

      let totalWords = words.length;

      let outputPara = outputCount.getElementsByTagName("p");

      for (let i = 1; i <= 15; i++) {
         let percent = ((freqs[i] / totalWords) * 100).toFixed(1) + "%";
         outputPara[i - 1].textContent = percent;
      }
   };
}
