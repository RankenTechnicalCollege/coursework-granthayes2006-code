"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Grant Hayes
      Date:   11/8/25

      Filename: project05-03.js
*/

// Reference the source document and the table of contents
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");

// Counter for heading anchors
let headingCount = 1;

// Heading level to include in the TOC
const heading = "H2";

// Traverse the child elements of sourceDoc
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
   if (n.nodeName === heading) {
      // Create an anchor and insert it before the heading's first child
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      n.insertBefore(anchor, n.firstChild);

      // Create a list item with a link pointing to the anchor
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      link.textContent = n.textContent;
      link.href = "#doclink" + headingCount;
      listItem.appendChild(link);

      // Add the item to the table of contents
      toc.appendChild(listItem);

      // Increment the heading counter
      headingCount++;
   }
}
