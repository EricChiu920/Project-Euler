// Non - abundant sums

// Problem 23
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

//   As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

function getDivisors(num) { // From problem 21
  if (num === 1) {
    return [1];
  }

  const arr = [1]; // get all proper divisors. Include 1 initially.
  const max = Math.sqrt(num); // Factors comes in pairs so you only need to check up to the sqrt.
  if (Number.isInteger(max)) { // Account for if it is a perfect square.
    arr.push(max);
  }

  for (let i = 2; i < max; i += 1) {
    if (num % i === 0) {
      arr.push(i);
      arr.push(num / i);
    }
  }

  return arr;
}

// New code for problem 23

function abundantSums() {
  let sum = 0;
  const abundantNumbers = [];

  for (let i = 12; i < 28123; i += 1) { // Get all abundant numbers under 28123.
    if (i < getDivisors(i).reduce((prev, curr) => prev + curr, 0)) {
      abundantNumbers.push(i);
    }
  }

  const isSumOfAbundantNumbers = {};
  for (let i = 0; i < abundantNumbers.length - 1; i += 1) { // Find out all numbers that can be written as the sum of two abundant numbers below 28123
    for (let j = i; abundantNumbers[i] + abundantNumbers[j] <= 28123 && j < abundantNumbers.length; j += 1) {
      isSumOfAbundantNumbers[abundantNumbers[i] + abundantNumbers[j]] = true;
    }
  }

  for (let i = 1; i <= 28123; i += 1) { // If a number is not in the object, then it can not be written as the sum of two abundant numbers.
    if (!isSumOfAbundantNumbers[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(abundantSums());

// const { performance } = require('perf_hooks');

// const runs = 100;
// const t0 = performance.now();
// for (let i = 0; i < runs; i += 1) {
//   abundantSums();
// }
// const t1 = performance.now();
// console.log(`Took ${(t1 - t0) / runs} milliseconds`);
