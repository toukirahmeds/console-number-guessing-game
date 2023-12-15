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
