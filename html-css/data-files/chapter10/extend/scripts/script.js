/*
    Student Name: Grant Hayes
    File Name: script.js
    Date: 09/25/25
*/

$(document).ready(function() {
    $("#main .hide-btn").click(function() {
        $("#main p").hide("slow");
    });

    $("#main .show-btn").click(function() {
        $("#main p").show("slow");
    });

    $("#jq-version").text($.fn.jquery);
});
