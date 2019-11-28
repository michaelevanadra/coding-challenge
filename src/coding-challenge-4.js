export function calculateValidationNumber(input) {
  if (typeof input !== 'number') {
    throw Error('Input is not an Integer');
  }

  const output = [...input.toString()].reduce((total, value) => Number(total) + Number(value), 0);
  return input < 10 ? input : calculateValidationNumber(output);  
}