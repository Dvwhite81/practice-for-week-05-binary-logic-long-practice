const convertToBase10 = require('./convertToBase10');

const convertToBase2 = element => {
    let first = '0b';
    if (typeof element === 'number') {
      let results = [];
      while (element > 0) {
        let digit = element % 2;
        results.push(digit);
        element = Math.floor(element / 2);
      }
      return first + results.reverse().join('');
    } else {
      let decimal = convertToBase10(element);
      return convertToBase2(decimal);
    }
  };

  module.exports = convertToBase2;
