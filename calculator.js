//current input and calculation result 
let screen = document.querySelector('.screen');
//result screen, where the history is shown
let resultsScreen = document.querySelector('.results-screen');

//declaring an array
let resultsArr = [];

//placeholder for an initial input to be blank
let displayStr = "";

function screenFunc(symb) {
	if (displayStr.length >= 19) {
		return; // prevents input over the max length
	}

	// checks if the character is a math operator
	function isOperation(char) {
		if (char === '+') {
			return true;
		} else if (char === '-') {
			return true;
		} else if (char === '*') {
			return true;
		} else if (char === '/') {
			return true;
		} else {
			return false;
		}
	}

	// check if a characher is a number
	function hasNumbers(char) {
		return char === '0' || char === '1'
			|| char === '2' || char === '3'
			|| char === '4' || char === '5'
			|| char === '6' || char === '7'
			|| char === '8' || char === '9';
	}

	// geting rid of the last character
	const lastChar = displayStr.slice(-1);

	// Logic to handle different scenarios based on input and current state
	if (displayStr.length === 0 && symb !== '-' && !isOperation(symb)) {
		displayStr += symb;
	} else if (displayStr.length === 0 && symb === '-') {
		displayStr += symb;
	}
	else if ((displayStr.length === 0 || (displayStr.length === 1 && lastChar === '-')) && !hasNumbers(symb) ) {
		return;
	}
	else if (isOperation(lastChar) && isOperation(symb)) {
		displayStr = displayStr.slice(0, -1) + symb;
	} else {
		displayStr += symb;
	}

	screen.innerText = displayStr; // Update the display with the current input
}

// Function(s) to calculate
function calkFunk() {
	displayStr = eval(displayStr); // Evaluate the input result as math equation
	displayStr = displayStr.toString(); // Convert result to string

	resultsArr.push(displayStr); //pushing result into array
	resultsScreen.innerText = "results: " + resultsArr.toString(); // Display history

	screen.innerText = displayStr; // show calculation result
}

// adding fuctionality to the clear button (the main input field)
function clearFunc() {
	displayStr = "";
	screen.innerText = displayStr;
}

// removing the last char from the current input
function removeNumberFunc() {
	displayStr = displayStr.substring(0, displayStr.length - 1);
	screen.innerText = displayStr;
}

// clearing the calculations history
function clearResultsArr() {
	resultsArr.splice(0, resultsArr.length);
	resultsScreen.innerText = "results: " + resultsArr.toString();
}
