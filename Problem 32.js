// Pandigital products

// Problem 32
// We shall say that an n - digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5 - digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand / multiplier / product identity can be written as a 1 through 9 pandigital.

//   HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

function isPandigital(num) {
  if (num.length !== 9 || num.includes('0')) {
    return false;
  }

  return new Set(num.split('')).size === 9; // Use Set to get rid of duplicates.
}

function pandigitalProducts() {
  let sum = 0;
  for (let i = 1000; i < 10000; i += 1) {
    for (let j = 2; j < Math.sqrt(i); j += 1) {
      const temp = `${i}${j}${i / j}`;
      if (isPandigital(temp)) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

console.log(pandigitalProducts());

// const { performance } = require('perf_hooks');

// const runs = 100;

// const t0 = performance.now();
// for (let i = 0; i < runs; i += 1) {
//   pandigitalProducts();
// }
// const t1 = performance.now();
// console.log(`Simple took ${(t1 - t0) / runs} milliseconds`);
