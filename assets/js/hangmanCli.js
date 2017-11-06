//Include the inquirer module
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

//word constructor function
let phraseCollectionArr = [
"Two wrongs don't make a right",
"The pen is mightier than the sword",
"When in Rome, do as the Romans",
"The squeaky wheel gets the oil",
"When the going gets tough, the tough get going",
"No man is an island",
"Fortune favors the bold",
"People who live in glass houses should not throw stones",
"Hope for the best, but prepare for the worst",
"Better late than never",
"Birds of a feather flock together",
"Keep your friends close and your enemies closer",
"A picture is worth a thousand words",
"There's no such thing as a free lunch",
"There's no place like home",
"Discretion is the greater part of valor",
"The early bird catches the worm",
"Never look a gift horse in the mouth",
"You can't make an omelet without breaking a few eggs",
"You can't always get what you want",
"A watched pot never boils",
"Beggars can't be choosers",
"Actions speak louder than words",
"If it ain't broke, don't fix it",
"Practice makes perfect",
"Easy come, easy go"
]
let randomlySelectedWord = '';

randomWordChooser = () =>{
	randomlySelectedWord = phraseCollectionArr[Math.floor(Math.random() * phraseCollectionArr.length)];
};
//still trying to wrap my head around es6 constructors
function GuessString(input){
	this.name = input;
	this.length = input.length;
};

GuessString.prototype.convertCharsToUnderscores = function() {
	let inputArr = this.name.split('');
	for (let i = 0; i < inputArr.length; i++){
		inputArr[i] = inputArr[i].replace(/^[a-zA-Z0-9_.-]*$/, '_ ')
	};
	let underscoreString = inputArr.join('');
	console.log(underscoreString);
};




