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
