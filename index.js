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
 * @returns {Promise<Number>}
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

/**
 * Starts the game.
 */
const main = async () => {
  const min = await getUserIntInput("Minimum whole number: ");
  const maxPrompt = `Maximum whole number (more than ${min}): `;
  let max = await getUserIntInput(maxPrompt);

  while (max <= min) {
    max = await getUserIntInput(maxPrompt);
  }

  const numOfTriesPrompt = "Number of tries (more than 0 and a whole number): ";
  let numOfTries = await getUserIntInput(numOfTriesPrompt);

  while (numOfTries <= 0) {
    numOfTries = await getUserIntInput(numOfTriesPrompt);
  }

  const randomNumber = getRandomInt(min, max);
  
  for (let triesLeft = numOfTries - 1; triesLeft >= 0; triesLeft--) {
    const triesMade = numOfTries - triesLeft;
    const userGuess = await getUserIntInput(
      `Guess the whole number (${min} to ${max}) (Tries Left: ${triesLeft + 1}): `
    );

    game(triesLeft, randomNumber, userGuess, triesMade);
  }

  rl.close();
}

main();
