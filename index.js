const readlineSync = require("readline-sync");

/**
 * Get integer input from the user in the console.
 * 
 * @param {string} printStr 
 * @returns {number}
 */
const getUserIntInput = printStr => {
  const input = readlineSync.question(printStr);
  const intInput = parseInt(input);

  if (isNaN(intInput) || parseFloat(input) !== intInput) {
    console.log("Must be a valid integer!");
    return getUserIntInput(printStr);
  }

  return intInput;
};

/**
 * Get a random integer in the inclusive range of {min} to {max}
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1));
  return min + randomNumber;
};

/**
 * Calculate the game result based on the values of the parameters
 * and print the result to the console.
 * 
 * @param {number} tries 
 * @param {number} randomNumber 
 * @param {number} guess 
 * @param {number} triesMade 
 */
const game = (tries, randomNumber, guess, triesMade) => {
  if (guess === randomNumber) {
    console.log(`WON by ${triesMade} tries`);
    process.exit();
  }

  if (tries <= 0) {
    console.log(`You have lost the game! The number was ${randomNumber}.`);
    process.exit();
  }

  if (guess > randomNumber) {
    console.log("TOO HIGH");
  } else {
    console.log("TOO LOW");
  }
};
