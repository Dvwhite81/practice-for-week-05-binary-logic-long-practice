// Ideas for functions below came from this site:
// https://www.i-programmer.info/programming/javascript/967-javascript-jems-active-logic-truthy-and-falsy.html

/******************************************************************************/

// Returns value based on the 'OR' Truth Table
const or = (A, B) => {
  if (A) return A;
  else return B;
};

// Returns value based on the 'AND' Truth Table
const and = (A, B) => {
  if (A) return B;
  else return A;
};

// Returns opposite
const not = A => {
  if (A === 0) return 1;
  if(A === 1) return 0;
}

const calculateAndReturn = (A, cb, B) => {
  return cb(A, B);
}

// 'cb' parameter should be either 'OR' or 'AND' functions from above
const calculateTruthTable = (A, cb, B,) => {
  console.log(cb(A, B));
};

module.exports = {
  or,
  and,
  not,
  calculateAndReturn,
  calculateTruthTable,
};
