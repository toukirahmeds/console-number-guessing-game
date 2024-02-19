const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Returns a random integer in the inclusive range
 * of {min} to {max}
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min + 1));

  return randomNumber + min;
};

/**
 * Prompts the user to input an integer.
 * 
 * @param {String} printStr 
 * @returns {Number}
 */
const getUserIntInput = async (printStr) => {
  const userInput = await rl.question(printStr);
  const userIntInput = parseInt(userInput);

  if (isNaN(userIntInput) || userIntInput !== parseFloat(userInput)) {
    console.log("Provide a valid whole number!");
    return getUserIntInput(printStr);
  }

  return userIntInput;
}

/**
 * Calculates the result of the current step.
 * 
 * @param {Number} triesLeft 
 * @param {Number} randomNumber 
 * @param {Number} guess 
 * @param {Number} triesMade 
 */
const game = (triesLeft, randomNumber, guess, triesMade) => {
  if (guess === randomNumber) {
    console.log(`Won the game with ${triesMade} ${triesMade > 1 ? 'tries' : 'try'}.`);
    process.exit(0);
  }

  if (triesLeft <= 0) {
    console.log(`You have lost the game! The number was ${randomNumber}.`);
    process.exit(0);
  }

  if (guess > randomNumber) {
    console.log("TOO HIGH");
  } else {
    console.log("TOO LOW");
  }
};

const main = async () => {
  rl.close();
}

main();
