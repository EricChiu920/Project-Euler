const bigInt = require('big-integer'); // yarn add big-integer
// Factorial digit sum

// Problem 20
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//   and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function factorialDigitSum(num = 100) {
  let factorial = num;

  for (let i = num - 1; i > 0; i -= 1) {
    factorial = bigInt(factorial).multiply(i);
  }

  return String(factorial).split('').reduce((prev, curr) => Number(prev) + Number(curr), 0);
}

console.log(factorialDigitSum());
