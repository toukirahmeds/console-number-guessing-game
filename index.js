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

console.log(getRandomIntInclusive(5, 7));
