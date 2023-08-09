// Convert the integers in the console.logs below to base 10:

/******************************************************************************/
/* Easy way
if (str.startsWith('0b')) base = 2;
else base = 16;

let rest = str.slice(2);
return parseInt(rest, base); */

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

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
