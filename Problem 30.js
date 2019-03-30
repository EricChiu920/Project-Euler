// Digit fifth powers

// Problem 30
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

function digitPowers() {
  let sum = 0;
  const powerDigits = {};

  for (let i = 0; i < 10; i += 1) {
    powerDigits[i] = i ** 5;
  }

  for (let i = 10; i < 354294; i += 1) {
    const arr = String(i).split('').map(val => powerDigits[val]); // Get each digit into a array, then get it's fifth power;
    if (arr.reduce((prev, curr) => prev + curr, 0) === i) {
      sum += i;
    }
  }

  return sum;
}

console.log(digitPowers());
