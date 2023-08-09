const { or, and, not, calculateTruthTable, calculateAndReturn } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/
// Update arguments to calculate and console.log returned value

// A    B     !A || (A && B)
calculateTruthTable(not(0), or, and(0, 0));
calculateTruthTable(not(0), or, and(0, 1));
calculateTruthTable(not(1), or, and(1, 0));
calculateTruthTable(not(1), or, and(1, 1));

console.log('--------------------');

// A    B     B || !A
calculateTruthTable(0, or, not(0));
calculateTruthTable(1, or, not(0));
calculateTruthTable(0, or, not(1));
calculateTruthTable(1, or, not(1));

console.log('--------------------');

// A    B     !(A && !B)
console.log(not(calculateAndReturn(0, and, not(0))));
console.log(not(calculateAndReturn(0, and, not(1))));
console.log(not(calculateAndReturn(1, and, not(0))));
console.log(not(calculateAndReturn(1, and, not(1))));

console.log('--------------------');

// A    B     !(A || !B)
let result;
result = calculateAndReturn(0, or, not(0));
console.log(not(result));
result = calculateAndReturn(0, or, not(1));
console.log(not(result));
result = calculateAndReturn(1, or, not(0));
console.log(not(result));
result = calculateAndReturn(1, or, not(1));
console.log(not(result));

console.log('--------------------');

// A    B     A || !A
console.log(calculateAndReturn(0, or, not(0)));
console.log(calculateAndReturn(0, or, not(0)));
console.log(calculateAndReturn(1, or, not(1)));
console.log(calculateAndReturn(1, or, not(1)));

console.log('--------------------');

// A    B     B && !B
console.log(calculateAndReturn(0, and, not(0)));
console.log(calculateAndReturn(1, and, not(1)));
console.log(calculateAndReturn(0, and, not(0)));
console.log(calculateAndReturn(1, and, not(1)));

console.log('--------------------');

// A    B    C     A && B || !C
let first;
first = calculateAndReturn(0, and, 0);
console.log(calculateAndReturn(first, or, not(0)));

console.log(calculateAndReturn(first, or, not(1)));

first = calculateAndReturn(0, and, 1);
console.log(calculateAndReturn(first, or, not(0)));

console.log(calculateAndReturn(first, or, not(1)));

first = calculateAndReturn(1, and, 0);
console.log(calculateAndReturn(first, or, not(0)));

console.log(calculateAndReturn(first, or, not(1)));

first = calculateAndReturn(1, and, 1);
console.log(calculateAndReturn(first, or, not(0)));

console.log(calculateAndReturn(first, or, not(1)));

console.log('--------------------');

// A    B    C     !A || (B && C)
let one, two;
one = not(0);
two = and(0, 0);
calculateTruthTable(one, or, two);

two = and(0, 1);
calculateTruthTable(one, or, two);

two = and(1, 0);
calculateTruthTable(one, or, two);

two = and(1, 1);
calculateTruthTable(one, or, two);

one = not(1);
two = and(0, 0);
calculateTruthTable(one, or, two);

two = and(0, 1);
calculateTruthTable(one, or, two);

two = and(1, 0);
calculateTruthTable(one, or, two);

two = and(1, 1);
calculateTruthTable(one, or, two);
