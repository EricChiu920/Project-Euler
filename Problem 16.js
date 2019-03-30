// Power digit sum

// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000 ?

const bigInt = require('big-integer'); // yarn add big-integer

// Use big in to properly find the number then convert it into a string.
// Split each digit into a array.
// Use reduce to add all digits to get the sum.

function powerDigitSum(num = 1000) {
  return String(bigInt(2).pow(num)).split('').reduce((acc, val) => acc + Number(val), 0);
}

console.log(powerDigitSum());
