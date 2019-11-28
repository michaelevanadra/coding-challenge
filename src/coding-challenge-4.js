/**
 * Function that accepts an integer and returns a “validation” number. This
 * validation number is calculated by adding all the digits in the input.
 * It will repeat the process until a single digit number is calculated.
 *
 * @param {number} input
 * Valid integer that needs to be computed
 * 
 * @returns {number}
 * Single digit number.
 */
export function calculateValidationNumber(input) {
  if (typeof input !== 'number') {
    throw Error('Input is not an Integer');
  }

  const output = [...input.toString()].reduce((total, value) => Number(total) + Number(value), 0);
  return input < 10 ? input : calculateValidationNumber(output);  
}