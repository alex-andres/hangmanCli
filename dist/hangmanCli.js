'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inquirer = require('inquirer'); //Include the inquirer module
//create a constructor function for Word
//Should be used to create an object of the current word that the user is guessing
//
//create a constructor function for Letter
//used for each letter in the current word
//each letter object should display an underlying character, or a blank placehold(such as an underscore),dending on whether the user has guessed the letter or not
//this should contain letter specific logic and data
//keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain
//EACH CONSTRUCTOR FUNCTION SHOULD BE ITS OWN FILE AND BE EXPORTED AND REQUIRED WHEREEVER NEEDED
//Make sure to use a couple of function prototypes for the constructor functions methods.

// //word constructor function

// randomWordChooser = () =>{
// 	randomlySelectedWord = phraseCollectionArr[Math.floor(Math.random() * phraseCollectionArr.length)];
// };
// //still trying to wrap my head around es6 constructors
// function GuessString(input){
// 	this.name = input;
// 	this.length = input.length;
// };

// GuessString.prototype.convertCharsToUnderscores = function() {
// 	let inputArr = this.name.split('');
// 	for (let i = 0; i < inputArr.length; i++){
// 		inputArr[i] = inputArr[i].replace(/^[a-zA-Z0-9_.-]*$/, '_ ')
// 	};
// 	let underscoreString = inputArr.join('');
// 	console.log(underscoreString);
// };


var Letter = require('./letter.js');
var Phrase = require('./phrase.js');
var frase = new Phrase();
var lett = new Letter();
var attemptsRemaining = lett.incorrectUserGuess.length;
var matchWord = "";
var x = 0;

lett.displayChar("", frase.phraseArr[x]);

function initialCondition() {
	if (lett.correctUserGuess.length === matchWord.length) {
		console.log("You win!!!");
		nextWord();
	} else if (attemptsRemaining === 0) {
		console.log("Welcome to HangmanCLI");
		startGame();
	} else if (attemptsRemaining === 9) {
		console.log("One guess Remaining");
		startGame();
	} else if (attemptsRemaining === 10) {
		console.log("Game Over... The guess word was" + frase.phraseArr[x]);
		nextWord();
	} else if (attemptsRemaining > 0 && attemptsRemaining < 10 && lett.correctUserGuess.length != frase.phraseArr[x].length) {
		console.log("Guess again");
		startGame();
	};
}

function startGame() {
	inquirer.prompt([{
		name: 'letter',
		message: 'Choose a letter',
		validate: function validate(str) {
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}]).then(function (res) {
		lett.displayChar(res.lett, frase.phraseArr[x]);
		matchWord = frase.phraseArr[x].replace(/(.)(?=.*\1)/g, "");
		attemptsRemaining = lett.incorrectUserGuess.length;
		initialCondition();
	});
};

function nextWord() {
	inquirer.prompt([{
		name: 'game',
		type: 'confirm',
		message: 'Do you want to play another round?',
		default: true
	}]).then(function (res) {
		if (res.game === true) {
			x++;
			lett.incorrectUserGuess = [];
			lett.correctUserGuess = [];
			attemptsRemaining = lett.incorrectUserGuess.length;
			lett.displayChar(res.lett, frase.phraseArr[x]);
			initialCondition();
		} else {
			process.exit();
		};
	});
}

startGame();
//# sourceMappingURL=hangmanCli.js.map