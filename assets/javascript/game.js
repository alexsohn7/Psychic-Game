// Variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

// Declared variables within local scope.  Assigned when key is presseed by user
    var userGuess = event.key;

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
// conditional statement if user chooses a letter
	if (letters.indexOf(userGuess) > -1) {
// if user guesses letter correctly 
				if (userGuess === computerGuess) {
					wins++;
					numberofGuesses = 9;
					guessChoices = [];
				}
// if user does not guess letter correctly 
				if (userGuess != computerGuess) {
					numberofGuesses --;
					guessChoices.push(userGuess);
				}
// when user runs out of guesses
				if (numberOfGuesses === 0) {

				numberOfGuesses = 9;
				losses ++;
				guessChoices = [];

				
			}
// variable html that replaces game id in html file. 
			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numberOfGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
// DOM replaces entire game id in html file with variable html
			document.querySelector("#game").innerHTML = html;

			
			}
		};


 
        



    






     



