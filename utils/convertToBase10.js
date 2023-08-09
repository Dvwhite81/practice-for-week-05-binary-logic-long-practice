// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let first;
  let rest = str.slice(2);
  let hex = '0123456789abcdef';
  let sum = 0;

  // Can't figure out how to do both cases with one loop :(
  if (str.startsWith('0b')) {
    first = 2;
    for (let i = rest.length - 1, j = 0; i >= 0, j < rest.length; i--, j++) {
      sum += (Math.pow(first, j) * rest[i]);
    }
    return sum;

  } else {
    first = 16;
    for (let i = 0, j = rest.length - 1 - i; i < rest.length, j >= 0; i++, j--) {
      sum += hex.indexOf(rest[i]) * Math.pow(16, j);
    }
  }
  return sum;
};

module.exports = convertToBase10;
