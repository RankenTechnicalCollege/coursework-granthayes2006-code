let favoriteMovies = ["White Chicks", "Scary Movie", "Spaceballs"];

function addMovie() {
    const newMovie = document.getElementById("movieInput").value.trim();
    const movieList = document.getElementById("movieList");
    if (newMovie !== "") favoriteMovies.push(newMovie);
    movieList.innerHTML = "";
    for (let i = 0; i < favoriteMovies.length; i++) {
        movieList.innerHTML += favoriteMovies[i] + "<br>";
    }
    document.getElementById("movieInput").value = "";
}

function verifyAge() {
    const ageInput = document.getElementById("ageInput").value.trim();
    const msg = document.getElementById("ageMsg");
    const age = parseInt(ageInput);
    if (isNaN(ageInput) || ageInput === "") msg.innerText = "Please enter your age!";
    else if (isNaN(age)) msg.innerText = "Please enter your age!";
    else if (age < 1 || age > 200) msg.innerText = "Age out of range!";
    else if (age >= 21) msg.innerText = "Welcome to the venue!";
    else msg.innerText = "You're not old enough!";
}

function showLyrics() {
    const numInput = document.getElementById("songInput").value.trim();
    const lyricsMsg = document.getElementById("lyricsMsg");
    const num = parseInt(numInput);
    if (isNaN(numInput) || numInput === "") lyricsMsg.innerText = "Please enter a number, not a word.";
    else if (num === 1) lyricsMsg.innerText = "One is the loneliest number that you'll ever do.";
    else if (num === 2) lyricsMsg.innerText = "Two can be as bad as one. It's the loneliest number since the number one.";
    else if (num === 3) lyricsMsg.innerText = "There is no three.";
    else lyricsMsg.innerText = "You didn't enter a valid number.";
}

function showOddNumbers() {
    const oddList = document.getElementById("oddNumbers");
    oddList.innerHTML = "";
    for (let i = 1; i <= 100; i += 2) oddList.innerHTML += i + "";
}

function showMultiples() {
    const multList = document.getElementById("multiples");
    multList.innerHTML = "";
    for (let i = 15; i <= 100; i += 15) multList.innerHTML += i + "";
}
