var numberOfRolls = Number(process.argv[2]);
var dice = [];
function diceRoll(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function rollDice() {
	for (var i = 1; i <= numberOfRolls; i++) {
		dice.push(diceRoll(1, 7));
	}

	console.log("Rolled " + numberOfRolls + " dice: " + dice.join(", "));
}

rollDice();

// check if its an integer
// for loop

// // 1. I need a function that generates x numbers from the command line
// 2. I need a function that randomly sorts through six numbers and reproduces the number of numbers above
