const remainders = require('../utils/remainders');
const convertToBase10 = require('../utils/convertToBase10');
// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
/* Easy way
if (typeof element === "string") {
    element = parseInt(element.slice(2), 2)
  }
  if (typeof element === "number") {
    return '0x' + element.toString(16)
  }
  */

const convertToBase16 = element => {
  let first = '0x';
  if (typeof element === 'number') {
    return first + remainders(element, 16).reverse().join('');
  } else {
    let decimal = convertToBase10(element);
    return convertToBase16(decimal);
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
